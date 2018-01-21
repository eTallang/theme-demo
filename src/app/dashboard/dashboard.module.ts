import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { TileComponent } from './tile/tile.component';
import { ThemeService } from '../core/services/theme.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [ DashboardComponent, TileComponent ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
