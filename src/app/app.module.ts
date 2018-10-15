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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
library.add(faCoffee, faCloud, faGithub, faFacebook);



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
    SharedModule,
    FontAwesomeModule
  ],
  providers: [
    SampleServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
