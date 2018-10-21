import { Component, OnInit } from '@angular/core';
import { SampleServiceService } from '../../../services/sample-service.service';

export interface Films {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private _sample: SampleServiceService) { }

  ngOnInit() {
    this.getStarWarsFilms();
  }

  getStarWarsFilms() {
    this._sample.getStwFilms(1)
      .subscribe((data: Films[]) => {
        console.log(data);
        // https://swapi.co/documentation#films
      });
  }

}
