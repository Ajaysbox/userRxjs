import { AppData } from './shared/app.data';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCounterComponent } from './user-counter/user-counter.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UserListComponent,
    UserCounterComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppData],
  bootstrap: [AppComponent]
})
export class AppModule { }
