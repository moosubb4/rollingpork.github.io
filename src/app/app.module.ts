import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SampleServiceService } from './services/sample-service.service';

import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routing';
import { ShowcaseRoutingModule } from './show-case/showcase.routing';
import { ResumeRoutingModule } from './resume/resume.routing';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ShowcaseRoutingModule,
    ResumeRoutingModule,
    RouterModule
  ],
  providers: [
    SampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
