import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  public myData = {
    personalData: {
      name: 'Thanathorn',
      surname: 'Kelatimongkolkul',
      nickName: 'Mhoo',
      birthDate: '04/04/1995',
      Nationality: 'Thai',
      contact: {
        tel: '0875571721',
        email: 'rollingpork@gmail.com',
        gitHub: 'github.com/moosubb4',
        page: 'moosubb4.github.io/rollingpork.github.io'
      },
      pic: {
        path: './assets/img/me2.png',
        width: 300,
        cropping: [-10, 0, 0, 14]
      }
    },
    education: {
      university: {
        name: 'rajamangala university of technology krungthep',
        deegree: 'Bachelor of Science (B.S.)',
        faculty: 'Faculty of Science',
        branch: 'Computer Science',
        grade: 2.75,
        working: { start: 2013, end: 2017 },
        seniorProject: {
          name: 'CASH DRAWER & TOPUP RECORD ON RFID CARD',
          describe: `Create web application to topup and register RFID card
          and comunicate to arduino board by MQTT protocall (made by python language)
          to control automatic drawer for collect cash `
        }
      }
    },
    workExperience: [
      {
        companyName: 'VERTICE INTERNATIONAL CO.,LTD',
        position: 'Frontend Developer',
        salary: 26500,
        working: { start: 2017, end: null },
        project: [
          {
            name: 'Kurumajiten Car Bell',
            describe: 'Japanese Car Trading & Management System build by Angular',
            logo: './assets/logo/kurumajiten.png',
            link: 'https://kurumajiten.jp/login'
          },
          {
            name: 'Carstamate',
            describe: 'Japanese Car Trading & Management System  build by Angular',
            logo: './assets/logo/carstamate.jpg',
            link: 'https://carsta.cloud/login'
          },
        ]
      },
      {
        companyName: 'Kratos co.,Ltd',
        position: 'Developer (Internship)',
        salary: null,
        working: { start: 2016, end: 2016 },
        project: null
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }



}
