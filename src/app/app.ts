import { Component, } from '@angular/core';
import {TranslationService} from './services/translation/translation.service';
import {fromEvent} from 'rxjs';
import {Section} from './components/section/section';
import {Home} from './pages/home/home';
import {Care} from './pages/care/care';

@Component({
  selector: 'app-root',
  imports: [
    Section,
    Home,
    Care
  ],
  templateUrl: './app.html'
})
export class App
{
  protected current_page_index: number = 0;
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
