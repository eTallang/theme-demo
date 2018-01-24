import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../core/services/theme.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'td-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
