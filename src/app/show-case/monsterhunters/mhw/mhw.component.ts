import { Component, OnInit } from '@angular/core';
import { MonsterHunterService } from '../../../services/monster-hunter.service';
import { tap } from 'rxjs/operators';

import { Armor, ArmorSets } from '../../../models/hunter';

@Component({
  selector: 'app-mhw',
  templateUrl: './mhw.component.html',
  styleUrls: ['./mhw.component.css']
})
export class MhwComponent implements OnInit {

  public armorHunters: Armor[] = [];
  public setHunters: ArmorSets[] = [];

  constructor(private _mhw: MonsterHunterService) { }

  ngOnInit() {
    this.getAmrSet();
  }

  // getAmr(id?: number) {
  //   this._mhw.getHunterArmor(id)
  //     .pipe(
  //       // tap(e => console.log('Armor', e))
  //     )
  //     .subscribe((armor: Armor) => {
  //       this.armorHunters.push(armor);
  //       console.log('this.armorHunters', this.armorHunters);
  //     });
  // }

  getAmrSet(id?: number) {
    if (id) {
      this._mhw.getHunterArmorSet(id)
        .subscribe((sets: ArmorSets) => {
          this.setHunters.push(sets);
          console.log('this.setHunters', this.setHunters);
        });
    } else {
      this._mhw.getHunterArmorSet()
        .subscribe((sets: ArmorSets[]) => {
          this.setHunters = [...sets];
          console.log('this.setHunters', this.setHunters);
        });
    }

  }

}
