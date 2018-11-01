import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ShowtimelineComponent } from './components/showtimeline/showtimeline.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFolder, faFile, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AgePipe } from './pipes/age.pipe';
library.add(faHome, faFolder, faFile, faGithub, faBirthdayCake);




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    ShowtimelineComponent,
    AgePipe,
    FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShowtimelineComponent,
    AgePipe
  ]

})
export class SharedModule { }
