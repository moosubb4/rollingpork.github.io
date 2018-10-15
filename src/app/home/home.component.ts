import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personalData = { birthDate: '4/4/1995' };


  constructor() { }

  ngOnInit() {
  }

}
