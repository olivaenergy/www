import {Component, EventEmitter, Output} from '@angular/core';
import {Section} from '../../components/section/section';
import {InfoBox} from '../../components/info-box/info-box';
import {Button} from '../../components/button/button';
import {TranslationService} from '../../services/translation/translation.service';

@Component({
  selector: 'app-home',
  imports: [Section, InfoBox, Button],
  templateUrl: './home.html',
})
export class Home {
  constructor(public t: TranslationService) {}

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  protected switchPage(number: number) {
    this.onPageChange.emit(number);
  }
}
