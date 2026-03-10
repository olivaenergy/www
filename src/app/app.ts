import { Component, } from '@angular/core';
import {TranslationService} from './services/translation/translation.service';
import {fromEvent} from 'rxjs';
import {Section} from './components/section/section';
import {Home} from './pages/home/home';
import {Care} from './pages/care/care';
import {Systems} from './pages/systems/systems';
import {Contact} from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    Home,
    Care,
    Systems,
    Contact
  ],
  templateUrl: './app.html'
})
export class App
{
  protected current_page_index: number = 2;
  constructor(protected translations: TranslationService)
  {
    fromEvent(window, 'hashchange').subscribe(() => {
      document.documentElement.lang = this.translations.currentLanguage;
    });
    document.documentElement.lang = this.translations.currentLanguage;
  }

  protected setPageIndex(index: number) {
    this.current_page_index = index;
  }
}
