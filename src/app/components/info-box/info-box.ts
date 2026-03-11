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

  formatBody(text: string): string
  {
    const lines = text.split('\n');
    let html = '';
    let inList = false;
    for (const line of lines)
    {
      if (line.trim().startsWith('- '))
      {
        if (!inList)
        {
          html += '<ul>';
          inList = true;
        }
        html += `<li>${line.trim().substring(2)}</li>`;
      }
      else
      {
        if (inList)
        {
          html += '</ul>';
          inList = false;
        }
        if (line.trim() !== '') html += `<p>${line}</p>`;
      }
    }
    if (inList) html += '</ul>';
    return html;
  }
}

