import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [ DashboardComponent, TileComponent ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
