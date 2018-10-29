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
  public msg: string;
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
    // console.log('location',  window.location.href);

  }

  sendLine() {
    this._simple.getLineOauthen().pipe().subscribe(e => console.log('getLineOauthen', e));
    if (this.msg) {
      this._simple.sendLineMassages(this.msg)
        .subscribe((data) => console.log('sendLineMassages', data), // success path
          (error) => console.log('sendLineMassages error', error));

      // solve this https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript 
      // get query string from url javascript
    }

    // this.newWindow(this._simple.getLineOauthen());
  }

  newWindow(url: string) {
    if (url) {
      // const url = 'https://moosubb4.github.io/rollingpork.github.io/home';
      const spec = [
        'height=1000', 'width=900', 'top=0', 'left=0', 'titlebar=0',
        'toolbar=0', 'scrollbars=0', 'resizable=0', 'location=0', 'menubar=0'
      ];
      window.open(url, '_blank', spec.join(','));
    }
  }



}

