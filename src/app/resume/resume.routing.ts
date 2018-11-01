import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPagesComponent } from './main-pages/main-pages.component';


const appRoutesShowcase: Routes = [
  {
    path: '', component: MainPagesComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(appRoutesShowcase)],
  exports: [RouterModule],
  declarations: [MainPagesComponent]
})
export class ResumeRoutingModule { }
