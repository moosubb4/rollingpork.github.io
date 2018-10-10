import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../services/sample-service.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _serviceSample: SampleServiceService) { }

  ngOnInit() {
    this._serviceSample.getBNKdata().pipe(tap(e => console.log(e))).subscribe(e => e);
  }

}
