import {Component, HostListener, OnInit} from '@angular/core';
import {Home} from './pages/home/home';
import {Care} from './pages/care/care';
import {Systems} from './pages/systems/systems';
import {Contact} from './pages/contact/contact';
import {LanguageSwitcher} from './components/language-switcher/language-switcher';
import {NgOptimizedImage, ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Home, Care, Systems, Contact, LanguageSwitcher, NgOptimizedImage],
  templateUrl: './app.html'
})
export class App implements OnInit
{
  protected current_page_index: number = 0;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit()
  {
    const saved = sessionStorage.getItem('pageIndex');
    const pageIndex = saved ? parseInt(saved, 10) : 0;
    this.current_page_index = pageIndex;
    history.replaceState({ pageIndex }, '');
  }

  protected setPageIndex(index: number)
  {
    this.current_page_index = index;
    sessionStorage.setItem('pageIndex', String(index));
    this.viewportScroller.scrollToPosition([0, 0]);
    history.pushState({ pageIndex: index }, '');
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event: PopStateEvent)
  {
    const pageIndex = event.state?.pageIndex ?? 0;
    this.current_page_index = pageIndex;
    sessionStorage.setItem('pageIndex', String(pageIndex));
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
