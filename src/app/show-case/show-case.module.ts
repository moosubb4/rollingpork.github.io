import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseRoutingModule } from './showcase.routing';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShowcaseRoutingModule,
    FormsModule
  ],
  declarations: []
})
export class ShowCaseModule { }
