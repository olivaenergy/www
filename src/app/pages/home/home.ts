import {Component, EventEmitter, Output} from '@angular/core';
import {Section} from '../../components/section/section';
import {TranslationService} from '../../services/translation/translation.service';
import {Button} from 'primeng/button';
import {Panel} from 'primeng/panel';

@Component({
  selector: 'app-home',
  imports: [Section, Button, Panel],
  templateUrl: './home.html',
})
export class Home {
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  constructor(public t: TranslationService) {}

  protected switchPage(number: number) {
    this.onPageChange.emit(number);
  }
}
