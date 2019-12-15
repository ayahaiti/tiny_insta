import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {SearchComponent} from "./search/search.component";
import { FollowComponent } from './follow/follow.component';
import { FeedComponent } from './feed/feed.component';
import { OnepostComponent } from './onepost/onepost.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisconnectComponent } from './disconnect/disconnect.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NotifierModule } from "angular-notifier";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    FollowComponent,
    FeedComponent,
    OnepostComponent,
    DashboardComponent,
    DisconnectComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      },
      theme: "material"
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
