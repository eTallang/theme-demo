import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule,
    MatSidenavModule,
    DashboardModule
  ],
  declarations: [ ShellComponent ],
  exports: [ ShellComponent ]
})
export class ShellModule { }
