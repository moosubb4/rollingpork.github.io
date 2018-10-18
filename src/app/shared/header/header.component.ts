import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  public isActive: boolean;

  constructor(private _router: Router) {
    this.isActive = false;
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  /*
  REF
   https://bulma.io/documentation/layout/hero/
   https://bulma.io/documentation/components/navbar/
   https://bulma.io/documentation/columns/nesting/

   https://www.designil.com/embed-responsive-video.html
   https://www.designil.com/write-rscss-css.html

  */


}
