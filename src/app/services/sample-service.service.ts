import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  private assetsJson = './assets/json';
  private jsonPlaceholder = 'https://jsonplaceholder.typicode.com';
  private bnk48 = 'https://www.api.bnk48.com/api';

  constructor(private _httpCli: HttpClient) { }

  getBNKdata() {
    const url = `${this.assetsJson}/bnk.json`;
    // const url = `${this.bnk48}/members`;
    return this._httpCli.get(url);
  }

  getPlacholderPhotos() {
    const url = `${this.jsonPlaceholder}/photos`;
    return this._httpCli.get(url);
  }

}
