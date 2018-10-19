import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor(private _httpCli: HttpClient) { }

  getBNKdata() {
    return this._httpCli
      .get('./assets/json/bnk.json');
  }
}
