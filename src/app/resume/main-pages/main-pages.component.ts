import { Component, OnInit } from '@angular/core';
import { Title } from '../../models/shared';
import PDFObject from 'pdfobject';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent implements OnInit {

  public title: Title = {
    title: 'resume',
    subTitle: 'Hires me plz!'
  };

  constructor() { }

  ngOnInit() {

    // PDFObject.embed('./assets/thanathorn.pdf', '#example1');
  }

}
