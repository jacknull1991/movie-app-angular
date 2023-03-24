import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = 'a579086b63c2bbca036a8878f7b599e7'; // Use v3
const BASE_URL = 'http://api.themoviedb.org/3/discover/movie?api_key=' + API_KEY;
const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY + '&language=en-US';
@Component({
  selector: 'app-root',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  title = 'movie-app';

  _movieArray: Array<any> = [];
  _genreArray: Array<any> = [];
  _http: HttpClient;

  // URL parameters
  _startDate: Date;
  _endDate: Date;
  _page: number;
  _totalPages: number;
  _genre: string;



  constructor(private http: HttpClient) {
    this._http = http;
    this._startDate = new Date();
    this._endDate = new Date();
    this._endDate.setDate(this._endDate.getDate() - 30);
    this._genre = 'all'
    this._page = 1;
    this._totalPages = 1;
  }

  ngOnInit() {
    this.getGenres();
    this.getMovies();
  }

  getMovies() {
    let url = BASE_URL;
    url += '&primary_release_date.lte=' + this._startDate.toISOString().split('T')[0];
    url += '&primary_release_date.gte=' + this._endDate.toISOString().split('T')[0];
    url += '&page=' + this._page;
    if (this._genre !== 'all') {
      url += '&with_genres=' + this._genre;
    }
    console.log(url);
    this._http.get<any>(url)
      .subscribe({
        next: data => {
          this._page = data.page;
          this._totalPages = data.total_pages;
          this._movieArray = data.results;
          console.log(this._movieArray)
        },
        error: error => {
          alert(error);
          console.error(error);
        }
      });
  }

  getGenres() {
    this._http.get<any>(GENRE_URL)
      .subscribe({
        next: data => {
          this._genreArray = data.genres;
          this._genreArray.unshift({ 'id': 'all', 'name': 'All' });
        },
        error: error => {
          alert(error);
          console.error(error);
        }
      });
  }

  genreChanged() {
    this._page = 1;
    this.getMovies();
  }

  pagePrevious() {
    if (this._page > 1) {
      this._page--;
      this.getMovies();
    }
  }

  pageNext() {
    if (this._page < this._totalPages) {
      this._page++;
      this.getMovies();
    }
  }

}
