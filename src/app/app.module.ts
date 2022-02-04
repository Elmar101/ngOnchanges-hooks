import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* import { SubHooksComponent } from './components/sub-hooks/sub-hooks.component';
import { NgDoCheckComponent } from './components/ng-do-check/ng-do-check.component';
import { NgViewChildComponent } from './components/ng-view-child/ng-view-child.component'; */
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    //SubHooksComponent,
    //NgDoCheckComponent,
   // NgViewChildComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
