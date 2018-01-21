import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'td-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles: string[] = [
    'Hi there!',
    'I\'m a tile',
    'Toggle the dark theme',
    'This background is the accent color',
    'The borders have card background color',
    'The font is \'Pacifico\'',
    'The tile list scrolls vertically',
    'This is the last tile'
  ];
  constructor() { }

  ngOnInit() {
  }

}
