import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { ThemeService } from './services/theme.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
    ThemeService
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule { }
