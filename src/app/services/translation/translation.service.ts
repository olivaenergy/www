import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { of, fromEvent } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLang: string = '';
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadFromHash();
    fromEvent(window, 'hashchange').pipe(
      switchMap(() => this.fetchLanguage(this.getLangFromHash()))
    ).subscribe();
  }

  translate(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) result = result[k];
      else return key;
    }
    return typeof result === 'string' ? result : key;
  }

  setLanguage(lang: string) {
    window.location.hash = lang;
  }

  get currentLanguage(): string {
    return this.currentLang;
  }

  private getLangFromHash(): string {
    return window.location.hash.replace('#', '') || 'en';
  }

  private loadFromHash() {
    this.fetchLanguage(this.getLangFromHash()).subscribe();
  }

  private fetchLanguage(lang: string) {
    if (lang === this.currentLang && Object.keys(this.translations).length > 0) return of(this.translations);

    return this.http.get<any>(`/locales/${lang}.json`).pipe(
      tap(data => {
        this.translations = data;
        this.currentLang = lang;
      }),
      catchError((): any => {
        console.warn(`⚠️ Translation file for "${lang}" not found. Falling back to English.`);
        if (lang !== 'en') return this.fetchLanguage('en');
        return of({});
      })
    );
  }
}
