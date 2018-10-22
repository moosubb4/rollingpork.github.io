import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainCaseComponent } from './main-case/main-case.component';
import { MhwComponent } from './monsterhunters/mhw/mhw.component';

const appRoutesShowcase: Routes = [
  {
    path: '', component: MainCaseComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutesShowcase)],
  exports: [RouterModule],
  declarations: [MainCaseComponent, MhwComponent]
})
export class ShowcaseRoutingModule { }
