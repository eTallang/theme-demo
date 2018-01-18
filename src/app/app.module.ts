import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatSidenavModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShellModule } from './shell/shell.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    ShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
