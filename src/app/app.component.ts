import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public titleHeader;

  constructor() { }

  componentAdded(event) {
    if (event.title) {
      this.titleHeader = event.title;
    }
  }

}

/*
ng build --prod --base-href "https://moosubb4.github.io/rollingpork.github.io/"
ngh --dir "dist/moosubb"
*/
