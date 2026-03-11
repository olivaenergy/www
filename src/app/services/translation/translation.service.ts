import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { load } from 'js-yaml';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService
{
  private translations: any = {};
  readonly translationsLoaded = signal(0);

  constructor(private http: HttpClient)
  {
    this.http.get('/locales/nl.yaml', { responseType: 'text' }).pipe(
      map(text => load(text) as any),
      tap(data =>
      {
        this.translations = data;
        this.translationsLoaded.update(v => v + 1);
      }),
      catchError(() =>
      {
        console.warn('⚠️ Failed to load en.yaml');
        return of({});
      })
    ).subscribe();
  }

  translate(key: string): string
  {
    this.translationsLoaded();
    const keys = key.split('.');
    let result: any = this.translations;
    for (const k of keys)
    {
      if (result && typeof result === 'object' && k in result) result = result[k];
      else return key;
    }
    return typeof result === 'string' ? result : key;
  }
}
