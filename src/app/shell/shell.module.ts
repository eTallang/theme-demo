import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell.component';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    ToolbarModule
  ],
  declarations: [ ShellComponent ],
  exports: [ ShellComponent ]
})
export class ShellModule { }
