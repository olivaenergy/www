import {Component} from '@angular/core';
import {Home} from './pages/home/home';
import {Care} from './pages/care/care';
import {Systems} from './pages/systems/systems';
import {Contact} from './pages/contact/contact';
import {LanguageSwitcher} from './components/language-switcher/language-switcher';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Home, Care, Systems, Contact, LanguageSwitcher],
  templateUrl: './app.html'
})
export class App
{
  protected current_page_index: number = 0;

  constructor(private viewportScroller: ViewportScroller) {}

  protected setPageIndex(index: number)
  {
    this.current_page_index = index;
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
