import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume.routing';
import { MainPagesComponent } from './main-pages/main-pages.component';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [MainPagesComponent]
})
export class ResumeModule { }
