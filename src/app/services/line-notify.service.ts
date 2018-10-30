import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

export interface LineMassage {
  message: string; // ข้อความไม่เกิน 1,000 ตัวอักษร (Required)
  imageThumbnail?: string; // URL ของรูปภาพที่จะแสดงใน chat(Optional)
  imageFullsize?: string; // URL ของรูปภาพที่เมื่อคลิก imageThumbnail แล้วจะสามารถแสดงออกมาได้ขนาดใหญ่(Optional)
  imageFile?: any; // ไฟล์รูปภาพที่สามารถอัพโหลดไปที่ server ของ LINE ได้(Optional)
  stickerPackageId?: string; // ID ของแพ๊คเกจสติ๊กเกอร์นั้นๆ Sticker List(Optional)
  stickerId?: string; // ID ของสติ๊กเกอร์นั้นๆ(Optional)
}

@Injectable({
  providedIn: 'root'
})
export class LineNotifyService {

  private endPoint = 'https://notify-bot.line.me';
  private client_id = 'HNAB6HJx5A0OxuKxprYTIP';
  private client_secret = 'N1saQHxRzClUCz9XyvRLEpGV2ieJxLzGmOUAGk3ZYrW';
  // private redirect_url = 'https://moosubb4.github.io/rollingpork.github.io/showcase';
  private redirect_url = 'http://localhost:4200/showcase';

  constructor(private _httpCli: HttpClient) { }

  getAuthCode() {
    const url = `${this.endPoint}/oauth/authorize`;
    const stateCode = this.idGenerators();
    const params = {
      'response_type': 'code',
      'client_id': this.client_id,
      'redirect_uri': this.redirect_url,
      'scope': 'notify',
      'state': stateCode
    };

    if (stateCode) {
      localStorage.setItem('state', stateCode);
    }


    return url + '?' + this.toQueryString(params);
  }

  getQueryAuthCode() {
    const stateCode = localStorage.getItem('state');
    const urlParams = new URLSearchParams(window.location.search);
    // console.log('getQueryAuthCode', urlParams.toString());
    if (urlParams.get('state') === stateCode) {
      localStorage.removeItem('state');
      return urlParams.get('code');
    }
    return null;
  }

  getLineAccessToken(authCode: string) { // step 2 get access token
    const url = `${this.endPoint}/oauth/token`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const params = {
      grant_type: 'authorization_code',
      code: authCode, // from getLineOauthen()
      redirect_uri: this.redirect_url,
      client_id: this.client_id,
      client_secret: this.client_secret
    };

    const options = {
      headers: headers,
      // params: params
    };

    return url + '?' + this.toQueryString(params);

    // return this._httpCli.post(url + '?' + this.toQueryString(params), null, options);
  }

  sendLineMassages(msg: string, token: string = 'VO0DXJQutTne1DfdBGG0ZFBUvLcw0zBbMsuXm7IHtlB') { // step 3 sending massages
    const url = `https://notify-api.line.me/api/notify`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', // หรือถ้าต้องการอัพโหลดภาพให้ใช้ multipart/form-data
      'Authorization': `Bearer ${token}`,
    });

    const body = {
      message: msg
    };

    const options = {
      headers: headers
    };
    // console.log('sendLineMassages\nurl', url, '\noptions', options);

    return this._httpCli.post(url + '?' + this.toQueryString(body), null, options);
  }



  // ========Helper=======

  idGenerators(number: number = 10): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < number; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  toQueryString(params): string {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  }

}
