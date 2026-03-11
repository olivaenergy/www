import { Component } from '@angular/core';
import {Section} from '../../components/section/section';
import {TranslationService} from '../../services/translation/translation.service';

@Component({
  selector: 'app-contact',
  imports: [Section],
  templateUrl: './contact.html',
})
export class Contact {
  constructor(public t: TranslationService) {}
}
