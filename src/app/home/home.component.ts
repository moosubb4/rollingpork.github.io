import { Component, OnInit } from '@angular/core';
import { PersonalData } from '../models/personaldata';
import { Title } from '../models/shared';
import { SampleServiceService } from '../services/sample-service.service';
import { tap } from 'rxjs/operators';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public personalData: PersonalData;
  public hiddenLab: boolean;
  public title: Title = {
    title: 'Home',
    subTitle: 'home page'
  };

  constructor(private _simple: SampleServiceService) {
    this.personalData = {
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
      pic: {
        path: './assets/img/me2.png',
        width: 300,
        cropping: [-10, 0, 0, 14]
      }
    };

    this.hiddenLab = false;

  }

  ngOnInit() {

  }


}

