import { Component, inject } from '@angular/core';
import {SupportedLanguage, TranslationService} from '../../services/translation/translation.service';
import {Select, SelectChangeEvent} from 'primeng/select';
import {FormsModule} from '@angular/forms';

const LANGUAGES: { code: SupportedLanguage; label: string; flag: string }[] = [
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', label: 'English',    flag: '🇬🇧' },
];

@Component({
  selector: 'app-language-switcher',
  imports: [Select, FormsModule],
  template: `
    <p-select
      [options]="languages"
      optionLabel="label"
      (onChange)="onChange($event)"
      [disabled]="t.isLoading()"
      aria-label="Select language"
      [placeholder]="currentLanguageLabel"
      size="small"
      styleClass="language-select"
      [dt]="selectStyle">
    </p-select>
  `,
  styles: [`
    :host ::ng-deep .language-select.p-select {
      appearance: none;
      background: none;
      border: 1px solid var(--dark-body-text-colour);
      color: var(--dark-body-text-colour);
      cursor: pointer;
      margin-right: 1rem;
    }

    :host ::ng-deep .language-select .p-select-label {
      color: var(--dark-body-text-colour);
    }

    :host ::ng-deep .p-select-overlay {
      background: var(--dark-body);
    }

    :host ::ng-deep .p-select-option {
      color: var(--dark-body-text-colour);
    }
  `]
})
export class LanguageSwitcher
{
  readonly t = inject(TranslationService);
  readonly languages = LANGUAGES;

  readonly selectStyle = {
    background: 'none',
    borderColor: 'var(--dark-body-text-colour)',
    color: 'var(--dark-body-text-colour)',
  };

  get currentLanguageLabel(): string {
    return LANGUAGES.find(l => l.code === this.t.currentLanguage())?.label ?? '';
  }

  onChange(event: SelectChangeEvent): void
  {
    const lang = (event.value as { code: SupportedLanguage }).code;
    this.t.setLanguage(lang);
  }
}
