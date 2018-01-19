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
    'Toggle the dark theme!',
    'Theme Demo',
    'Lorem Ipsium'
  ];
  constructor() { }

  ngOnInit() {
  }

}
