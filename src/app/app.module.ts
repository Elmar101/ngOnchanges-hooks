import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubHooksComponent } from './components/sub-hooks/sub-hooks.component';
import { NgDoCheckComponent } from './components/ng-do-check/ng-do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    SubHooksComponent,
    NgDoCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
