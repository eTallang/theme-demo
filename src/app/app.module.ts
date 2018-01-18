import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShellModule } from './shell/shell.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ShellModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
