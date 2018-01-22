import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatSlideToggleModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { TileComponent } from './tile/tile.component';
import { ThemeService } from '../core/services/theme.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  declarations: [ DashboardComponent, TileComponent ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
