import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'showcase',
    loadChildren: './show-case/show-case.module#ShowCaseModule'
  },
  {
    path: 'resume',
    loadChildren: './resume/resume.module#ResumeModule'
  }];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {
      // useHash: true,
      // enableTracing: true,
      // preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: []
})
export class AppRoutingModule { }


// https://moosubb4.github.io/myResume.github.io/
