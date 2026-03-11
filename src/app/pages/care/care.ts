import {Component, EventEmitter, Output} from '@angular/core';
import {Section} from '../../components/section/section';
import {Button} from '../../components/button/button';
import {InfoBox} from '../../components/info-box/info-box';

@Component({
  selector: 'app-care',
  imports: [Section, InfoBox],
  templateUrl: './care.html',
})
export class Care {
  @Output() onPageChange: EventEmitter<number> = new EventEmitter();

  protected switchPage(number: number) {
    this.onPageChange.emit(number);
  }
}
