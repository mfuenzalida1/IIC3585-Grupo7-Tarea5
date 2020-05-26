import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  searchInput = '';
  jokeTest = null;
  displayList = false;

  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
  }

  searchJoke() {
    const text = this.searchInput;
    this.jokesService.getJokes(text)
      .subscribe(
        response => {
          console.log(response);
          this.displayList = true;
          this.jokeTest = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  clearSearch() {
    this.displayList = false;
  }

}
