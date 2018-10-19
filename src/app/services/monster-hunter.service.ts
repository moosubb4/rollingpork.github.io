import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonsterHunterService {

  private urlMhw = 'https://mhw-db.com/';

  constructor(private _httpCli: HttpClient) { }

  getHunterArmor(id?: number) {

    const url = id
      ? this.urlMhw + `armor/${id}`
      : this.urlMhw + `armor/`;

    console.log('urls', url);
    return this._httpCli.get(url);
  }

  getHunterArmorSet(id?: number) {
    const url = id
      ? this.urlMhw + `armor/sets/${id}`
      : this.urlMhw + `armor/sets`;

    console.log('urls', url);
    return this._httpCli.get(url);
  }

}
