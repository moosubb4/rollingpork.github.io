import { Injectable } from '@angular/core';
import { BNK48 } from '../models/bnk48Member';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
// import { JSO, Popup } from 'jso';

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
export class SampleServiceService {

  private assetsJson = './assets/json';
  private jsonPlaceholder = 'https://jsonplaceholder.typicode.com';
  private bnk48 = 'https://www.api.bnk48.com/api';

  private endPoint = 'https://notify-bot.line.me';
  private client_id = 'HNAB6HJx5A0OxuKxprYTIP';
  private client_secret = 'N1saQHxRzClUCz9XyvRLEpGV2ieJxLzGmOUAGk3ZYrW';
  private redirect_url = 'https://moosubb4.github.io/rollingpork.github.io/home';  // 'http://localhost:4200/home';

  constructor(private _httpCli: HttpClient) { }

  getBNKdata() {
    const url = `${this.assetsJson}/bnk.json`;
    // const url = `${this.bnk48}/members`;
    return this._httpCli.get(url);
  }

  getPlacholderPhotos() {
    const url = `${this.jsonPlaceholder}/photos`;
    return this._httpCli.get<BNK48>(url);
  }


  // getOauth() {
  //   const config = {};
  //   const j = new JSO(config);
  // }


  getLineOauthen() { // Step 1 get auth code
    const url = `${this.endPoint}/oauth/authorize`;
    const params = {
      'response_type': 'code',
      'client_id': this.client_id,
      'redirect_uri': this.redirect_url,
      'scope': 'notify',
      'state': this.idGenerators()
    };
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': 'http://localhost:4200'
    // });
    const options = { params: params };

    console.log('getLineOauthen\nurl', url, '\noptions', options);

    return this._httpCli.get(url, options);
  }

  getLineAccessToken(authCode: string) { // step 2 get access token
    const url = `${this.endPoint}/oauth/token`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = {
      headers: headers
    };
    const body = {
      grant_type: 'authorization_code',
      code: authCode, // from getLineOauthen()
      redirect_uri: this.redirect_url,
      client_id: this.client_id,
      client_secret: this.client_secret
    };

    console.log('getLineAccessToken\nurl', url, '\nbody', body, '\noptions', options);


    return this._httpCli.post(url, body, options);

  }

  sendLineMassages(msg: string, token: string = 'XTM1f7j6xSFm3o1jTLq3RVFgszkgN1UWKpfLlyjy7Q3') { // step 3 sending massages
    const url = `${this.endPoint}/api/notify`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded', // หรือถ้าต้องการอัพโหลดภาพให้ใช้ multipart/form-data
      'Authorization': `Bearer ${token}`,
    });
    const options = { headers: headers };
    const body: LineMassage = {
      message: msg
    };

    console.log('sendLineMassages\nurl', url, '\noptions', options);

    return this._httpCli.post(url, body, options);
  }

  idGenerators(number: number = 10): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < number; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

}
