import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '../../models/shared';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() title: Title;
  public hamburgerToggle: boolean;

  constructor(private _router: Router) {
    // this.isActive = false;
    this.hamburgerToggle = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.title) {
    //   console.log(this.title);
    // }
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
