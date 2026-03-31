import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  @Input() hasImage : boolean = false;
  @Input() imagePath: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720' viewBox='0 0 1280 720'%3E%3Crect width='100%25' height='100%25' fill='%23ddd'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' text-anchor='middle' fill='%23999'%3E1280×720%3C/text%3E%3C/svg%3E";
  @Input() imageAlt : string = "PlaceHolder";
}
