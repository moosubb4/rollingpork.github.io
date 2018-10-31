import { Component, OnInit, Input } from '@angular/core';
import { ExpData } from '../../../models/exp';

@Component({
  selector: 'app-showtimeline',
  templateUrl: './showtimeline.component.html',
  styleUrls: ['./showtimeline.component.css']
})
export class ShowtimelineComponent implements OnInit {

  @Input() experience: ExpData[] = [];

  constructor() {
  }

  ngOnInit() {
    const data = [
      {
        year: 2017,
        until: 2020,
        company: 'What ever you are..',
        describe: 'His name is ...John Ceena!!!!!!!'
      },
      {
        year: 2017,
        until: 2020,
        company: 'What ever you are..',
        describe: 'His name is ...John Ceena!!!!!!!'
      },
      {
        year: 2017,
        until: 2020,
        company: 'What ever you are..',
        describe: 'His name is ...John Ceena!!!!!!!'
      }
    ];

    if (!this.experience) {
      this.experience = data;
    } else {
      this.experience = [...this.experience, ...data];
    }
  }

}
