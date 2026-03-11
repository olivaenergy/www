import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Button} from '../button/button';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './info-box.html',
  styleUrls: ['./info-box.css']
})
export class InfoBox
{
  @Input() title: string = '';
  @Input() subtitle!: string;
  @Input() hasButton: boolean = true;
  @Input() isTitleGreen: boolean = false;
  @Input() hasDash: boolean = false;
  @Input() buttonLabel: string = '';
  @Input() width: string = '30rem';
  @Output() OnClick: EventEmitter<void> = new EventEmitter();
}

