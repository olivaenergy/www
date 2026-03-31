import { Component } from '@angular/core';
import {TranslationService} from '../../services/translation/translation.service';
import {Panel} from 'primeng/panel';
import {Card} from 'primeng/card';
import {Skeleton} from 'primeng/skeleton';

@Component({
  selector: 'app-contact',
  imports: [Panel, Card, Skeleton],
  templateUrl: './contact.html',
})
export class Contact {
  protected imageLoaded: Record<number, boolean> = {};
  constructor(public t: TranslationService) {}
}
