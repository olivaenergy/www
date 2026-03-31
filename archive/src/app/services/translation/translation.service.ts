import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { load } from 'js-yaml';
import { signal, computed } from '@angular/core';

export type SupportedLanguage = 'nl' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService
{
  private translationsCache: Record<string, any> = {};

  readonly currentLanguage = signal<SupportedLanguage>('nl');
  readonly translationsLoaded = signal(0);
  readonly isLoading = signal(false);

  // Derived signal — reacts to both language changes and load completions
  readonly activeTranslations = computed(() => {
    this.translationsLoaded(); // track load signal
    return this.translationsCache[this.currentLanguage()] ?? {};
  });

  constructor(private http: HttpClient)
  {
    this.loadLanguage('nl'); // load default
  }

  setLanguage(lang: SupportedLanguage): void
  {
    if (this.translationsCache[lang])
    {
      // Already cached — just switch
      this.currentLanguage.set(lang);
      this.translationsLoaded.update(v => v + 1);
    } else {
      this.loadLanguage(lang);
    }
  }

  private loadLanguage(lang: SupportedLanguage): void
  {
    this.isLoading.set(true);

    this.http.get(`/locales/${lang}.yaml`, { responseType: 'text' }).pipe(
      map(text => load(text) as any),
      tap(data => {
        this.translationsCache[lang] = data;
        this.currentLanguage.set(lang);
        this.translationsLoaded.update(v => v + 1);
        this.isLoading.set(false);
      }),
      catchError(() => {
        console.warn(`⚠️ Failed to load ${lang}.yaml`);
        this.isLoading.set(false);
        return of({});
      })
    ).subscribe();
  }

  translate(key: string): string
  {
    this.translationsLoaded(); // reactive dependency
    const keys = key.split('.');
    let result: any = this.activeTranslations();
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) result = result[k];
      else return key;
    }
    return typeof result === 'string' ? result : key;
  }

  translateArray(key: string): string[] {
    this.translationsLoaded(); // reactive dependency
    const keys = key.split('.');
    let node: any = this.activeTranslations();
    for (const k of keys) {
      if (node && typeof node === 'object' && k in node) node = node[k];
      else return [];
    }
    if (Array.isArray(node)) return node;
    if (typeof node === 'string') return node.split('\n');
    return [];
  }
}
