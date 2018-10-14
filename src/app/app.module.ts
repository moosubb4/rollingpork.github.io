import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SampleServiceService } from './services/sample-service.service';

import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routing';
import { ShowcaseRoutingModule } from './show-case/showcase.routing';
import { ResumeRoutingModule } from './resume/resume.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ShowcaseRoutingModule,
    ResumeRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    SampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
