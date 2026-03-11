import { Component } from '@angular/core';
import {Section} from '../../components/section/section';
import {InfoBox} from '../../components/info-box/info-box';

@Component({
  selector: 'app-systems',
  imports: [Section, InfoBox],
  templateUrl: './systems.html',
})
export class Systems {}
