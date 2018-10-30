import { Component, OnInit } from '@angular/core';

import { SampleServiceService } from '../../services/sample-service.service';
import { LineNotifyService } from '../../services/line-notify.service';
import { tap, take, map } from 'rxjs/operators';
import { BNK48, Member, Bio, DislikeFoods, FirstName, LastName, Nickname } from '../../models/bnk48Member';
import { Title } from '../../models/shared';

export interface ResponesToken {
  status: number;
  message: string;
  access_token: string;
}

@Component({
  selector: 'app-main-case',
  templateUrl: './main-case.component.html',
  styleUrls: ['./main-case.component.css']
})
export class MainCaseComponent implements OnInit {

  public members: Member[] = [];
  public title: Title = {
    title: 'Show Case',
    subTitle: 'show my angular work'
  };
  public ontab: string;
  public onBorder: boolean;

  public msg: string;
  public accessToken: string;
  public authCode: string;

  constructor(private _simple: SampleServiceService, private _lineNoti: LineNotifyService) {
    this.onBorder = false;
    this.ontab = 'line';
  }

  ngOnInit() {
    this._simple.getBNKdata()
      .subscribe((item: BNK48) => {
        this.members = [...item.members];
      });

    // this.getQeuryString();
    this.authCode = this._lineNoti.getQueryAuthCode();
    console.log('getQueryAuthCode', this.authCode);


  }

  getAuth() {
    console.log('getAuth');
    const url = this._lineNoti.getAuthCode();
    const spec = [
      'height=1000', 'width=900', 'top=0', 'left=0', 'titlebar=0',
      'toolbar=0', 'scrollbars=0', 'resizable=0', 'location=0', 'menubar=0'
    ];
    window.open(url, '_top', spec.join(','));
  }

  getAccessToken() {
    console.log('getAccessToken');
    if (this.authCode) {
      window.open(this._lineNoti.getLineAccessToken(this.authCode), '_top');

      // .subscribe((e: ResponesToken) => {
      //   console.log('Res=>getAccessToken', e);
      //   if (e) {
      //     this.accessToken = e.access_token;
      //   }
      // });
      // this._simple.getLineAccessToken(this.authCode)
      //   .subscribe((e: ResponesToken) => {
      //     if (e) {
      //       this.accessToken = e.access_token;
      //     }
      //     console.log('getLineAccessToken', e);
      //   });
    }
  }

  sendLine() {
    if (this.msg) {
      //   this._simple.sendLineMassages(this.msg, this.accessToken)
      //     .subscribe((data) => console.log('sendLineMassages', data), // success path
      //       (error) => console.log('sendLineMassages error', error));

      //   // solve this https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
      //   // get query string from url javascript

      this._lineNoti.sendLineMassages(this.msg, this.accessToken)
        .subscribe(e => console.log('sendLineMassages', e));
    }
    // // this.newWindow(this._simple.getLineOauthen());

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

  getQeuryString() {
    const urlParams = new URLSearchParams(window.location.search);

    this.authCode = urlParams.get('code');
    // console.log('getQeuryString 1', urlParams);
    // console.log('getQeuryString 2', urlParams.has('get'));
    // console.log('getQeuryString 3', urlParams.toString());
    // console.log('getQeuryString 4', urlParams.get('code'));
    // console.log('getQeuryString 5', urlParams.get('state'));

  }




}
