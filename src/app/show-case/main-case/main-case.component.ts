import { Component, OnInit } from '@angular/core';

import { SampleServiceService } from '../../services/sample-service.service';
import { tap, take } from 'rxjs/operators';
import { BNK48, Member } from '../../models/bnk48Member';

@Component({
  selector: 'app-main-case',
  templateUrl: './main-case.component.html',
  styleUrls: ['./main-case.component.css']
})
export class MainCaseComponent implements OnInit {

  public members: Member[] = [];

  constructor(private _serviceSample: SampleServiceService) { }

  ngOnInit() {
    this._serviceSample.getBNKdata()
      .subscribe((item: BNK48) => {
        this.members = item.members;
      });
  }

}
