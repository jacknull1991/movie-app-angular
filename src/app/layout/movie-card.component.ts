import { Component, Input } from "@angular/core";

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html'
})

export class MovieComponent {
  @Input()
  movie!: any;

  _url: string = '';

  ngOnInit() {
    this._url = IMG_BASE_URL + this.movie.poster_path
  }
}