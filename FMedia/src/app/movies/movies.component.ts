import { Component, OnInit } from '@angular/core';

enum DisplayModeEnum {
  Card = 'card',
  Grid = 'grid'
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor() { }

  ngOnInit() {
    this.displayMode = DisplayModeEnum.Card;
  }

  changeDisplayMode(mode: DisplayModeEnum) {
    this.displayMode = mode;
  }
}
