import {Component} from '@angular/core';
import {Section} from '../../components/section/section';
import {TranslationService} from '../../services/translation/translation.service';
import {Panel} from 'primeng/panel';
import {formatBody} from '../../utils/helpers';

@Component({
  selector: 'app-care',
  imports: [Section, Panel],
  templateUrl: './care.html',
})
export class Care {
  constructor(public t: TranslationService) {}
  protected readonly formatBody = formatBody;
}
