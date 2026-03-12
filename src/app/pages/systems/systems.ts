import { Component } from '@angular/core';
import {Section} from '../../components/section/section';
import {TranslationService} from '../../services/translation/translation.service';
import {Panel} from 'primeng/panel';
import {formatBody} from '../../utils/helpers';

@Component({
  selector: 'app-systems',
  imports: [Section, Panel],
  templateUrl: './systems.html',
})
export class Systems {
  constructor(public t: TranslationService) {}

  protected readonly formatBody = formatBody;
}
