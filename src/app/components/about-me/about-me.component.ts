import { Component, OnInit } from '@angular/core';
// import { PersonalData } from '../../models/personaldata';
export interface Working {
  start: number;
  end?: number;
}

export interface Contact {
  tel: string;
  email: string;
  gitHub: string;
  page: string;
}

export interface Pic {
  path: string;
  width: number;
  cropping: number[];
}

export interface PersonalData {
  name: string;
  surname: string;
  nickName: string;
  birthDate: string;
  Nationality: string;
  contact: Contact;
  pic: Pic;
}

export interface SeniorProject {
  name: string;
  describe: string;
}

export interface University {
  name: string;
  deegree: string;
  faculty: string;
  branch: string;
  grade: number;
  working: Working;
  seniorProject: SeniorProject;
}

export interface Education {
  university: University;
}


export interface Project {
  name: string;
  describe: string;
  logo: string;
  link: string;
}

export interface WorkExperience {
  companyName: string;
  position: string;
  salary?: number;
  working: Working;
  project: Project[];
}

export interface Medata {
  personalData: PersonalData;
  education: Education;
  workExperience: WorkExperience[];
}


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {


  public MeData: Medata = {
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
    // console.log(JSON.stringify(this.MeData));
  }

}
