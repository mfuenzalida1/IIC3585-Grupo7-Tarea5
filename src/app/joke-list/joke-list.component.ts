import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  searchInput = '';
  jokeList = new Set();
  displayList = false;
  searching = false;

  constructor(private jokesService: JokesService) { }

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

}
