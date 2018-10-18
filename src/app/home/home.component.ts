import { Component, OnInit } from '@angular/core';
import { PersonalData } from '../models/personaldata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personalData: PersonalData = {
    name: 'Thanathorn',
    surname: 'Kelatimongkolkul',
    birthDate: '04/04/1995',
    age: 23,
    Personality: ['Friendly', 'Responsible'],
    Religion: 'Buddhist',
    Nationality: 'Thai',
    Height: 169,
    weight: 100,
    Language: [
      { Language: 'Thai', level: 'Native' },
      { Language: 'English', level: 'Intermediate' }
    ],
    contact: {
      tel: '0875571721',
      email: 'rollingpork@gmail.com'
    },
    pic: './assets/img/mecongrat.jpg'
  };


  constructor() { }

  ngOnInit() {

  }

}

