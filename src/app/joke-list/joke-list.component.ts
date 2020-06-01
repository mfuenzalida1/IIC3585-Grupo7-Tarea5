import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { LocalStorageService } from '../local-storage.service';
import { Constants } from '../app.constants';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  searchInput = '';
  jokeList = new Set();
  displayList = false;
  displayMyList = false;
  searching = false;
  myJokes = new Set(this.localStorageService.get(Constants.KEY_SAVED_JOKES));

  constructor(private jokesService: JokesService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  async searchJoke() {
    const text = this.searchInput;
    if (text === '') {
      return;
    }
    this.searching = true;
    const check: any = await this.jokesService.getJoke(text).toPromise();
    if (check.error) {
      this.searching = false;
      this.displayList = true;
      return;
    }
    for (let index = 0; index < 5; index++) {
      this.jokesService.getJoke(text)
          .subscribe(
            response => {
              console.log(response);
              const res = response as any;
              if (res.error) {
                console.log('se acabaron los chistes');
                this.displayList = true;
                this.searching = false;
                return;
              }
              this.jokeList.add(res.joke);
            },
            error => {
              console.log('error de request:');
              console.log(error);
              this.displayList = true;
              this.searching = false;
            }
          );
    }
    this.displayList = true;
  }

  randomJoke() {
    this.jokesService.getRandomJoke()
      .subscribe(
        response => {
          console.log(response);
          const res = response as any;
          if (!res.error) {
            this.displayList = true;
            this.jokeList.add(res.joke);
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  clearSearch() {
    this.displayList = false;
    this.jokeList = new Set();
    this.searching = false;
  }

  saveJoke(joke: string) {
    this.myJokes = new Set(this.localStorageService.get(Constants.KEY_SAVED_JOKES));
    if (this.myJokes === null) {
      this.myJokes = new Set();
    }
    this.myJokes.add(joke);
    this.localStorageService.set(Constants.KEY_SAVED_JOKES, Array.from(this.myJokes));
    this.displayList = false;
    this.displayList = true;
  }

  getSavedJokes() {
    this.displayMyList = true;
  }

  exitMyList() {
    this.displayMyList = false;
  }

  removeJoke(joke: String) {
    this.myJokes.delete(joke);
    this.localStorageService.set(Constants.KEY_SAVED_JOKES, Array.from(this.myJokes));
    this.exitMyList();
    this.getSavedJokes();
  }
}
