import {Component} from '@angular/core';
import {Home} from './pages/home/home';
import {Care} from './pages/care/care';
import {Systems} from './pages/systems/systems';
import {Contact} from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Home, Care, Systems, Contact],
  templateUrl: './app.html'
})
export class App
{
  protected current_page_index: number = 0;
  protected setPageIndex(index: number)
  {
    this.current_page_index = index;
  }
}
