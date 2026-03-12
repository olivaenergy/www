import { Component } from '@angular/core';
import {Section} from '../../components/section/section';
import {TranslationService} from '../../services/translation/translation.service';
import {Panel} from 'primeng/panel';

@Component({
  selector: 'app-systems',
  imports: [Section, Panel],
  templateUrl: './systems.html',
})
export class Systems {
  constructor(public t: TranslationService) {}
}
