import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainCaseComponent } from './main-case/main-case.component';

const appRoutesShowcase: Routes = [
  {
    path: '', component: MainCaseComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(appRoutesShowcase)],
  exports: [RouterModule],
  declarations: [MainCaseComponent]
})
export class ShowcaseRoutingModule { }
