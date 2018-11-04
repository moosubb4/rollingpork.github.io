import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPagesComponent } from './main-pages/main-pages.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

library.add(faFilePdf);


const appRoutesShowcase: Routes = [
  {
    path: '', component: MainPagesComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(appRoutesShowcase), FontAwesomeModule],
  exports: [RouterModule],
  declarations: [MainPagesComponent]
})
export class ResumeRoutingModule { }
