import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseRoutingModule } from './showcase.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShowcaseRoutingModule,
  ],
  declarations: []
})
export class ShowCaseModule { }
