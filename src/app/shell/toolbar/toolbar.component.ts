import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'td-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private themeService: ThemeService) { }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
