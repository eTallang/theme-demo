import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSlideToggleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  declarations: [ ToolbarComponent ],
  exports: [ ToolbarComponent ]
})
export class ToolbarModule { }
