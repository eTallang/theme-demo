import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ToolbarModule,
    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
