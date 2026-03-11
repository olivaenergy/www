import { Component } from '@angular/core';
import {Section} from '../../components/section/section';
import {InfoBox} from '../../components/info-box/info-box';
import {TranslationService} from '../../services/translation/translation.service';

@Component({
  selector: 'app-systems',
  imports: [Section, InfoBox],
  templateUrl: './systems.html',
})
export class Systems {
  constructor(public t: TranslationService) {}
}
