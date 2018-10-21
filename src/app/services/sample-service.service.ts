import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  private starWarsUrl = 'https://swapi.co/api';

  constructor(private _httpCli: HttpClient) { }

  getBNKdata() {
    return this._httpCli
      .get('./assets/json/bnk.json');
  }

  getStwFilms(ep: number) {
    const url = `${this.starWarsUrl}/films/${ep}`;
    return this._httpCli.get(url);
  }

}
