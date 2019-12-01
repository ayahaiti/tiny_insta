import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SearchComponent} from "./search/search.component";
import { Follow } from './follow/follow.component/follow.component.component';
import { FollowComponent } from './follow/follow.component';
import { FeedComponent } from './feed/feed.component';
import { OnepostComponent } from './onepost/onepost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    Follow.ComponentComponent,
    FollowComponent,
    FeedComponent,
    OnepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
