import { Component, OnInit } from '@angular/core';

import { SampleServiceService } from '../../services/sample-service.service';
import { tap, take, map } from 'rxjs/operators';
import { BNK48, Member, Bio, DislikeFoods, FirstName, LastName, Nickname } from '../../models/bnk48Member';
import { Title } from '../../models/shared';

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
  public onBorder: boolean;

  constructor(private _serviceSample: SampleServiceService) {
    this.onBorder = false;
  }

  ngOnInit() {
    this._serviceSample.getBNKdata()
      .subscribe((item: BNK48) => {
        this.members = [...item.members];
        console.log('members', this.members);
      });
  }



}
