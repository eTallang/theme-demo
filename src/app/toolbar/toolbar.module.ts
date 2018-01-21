import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSlideToggleModule, MatButtonModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ ToolbarComponent ],
  exports: [ ToolbarComponent ]
})
export class ToolbarModule { }
