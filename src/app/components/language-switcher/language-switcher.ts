import { Component, inject } from '@angular/core';
import {SupportedLanguage, TranslationService} from '../../services/translation/translation.service';

const LANGUAGES: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', label: 'English',    flag: '🇬🇧' },
];

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher
{
  readonly t = inject(TranslationService);
  readonly languages = LANGUAGES;

  onChange(event: Event): void
  {
    const lang = (event.target as HTMLSelectElement).value as SupportedLanguage;
    this.t.setLanguage(lang);
  }
}
