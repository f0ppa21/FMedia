import { Component, OnInit } from '@angular/core';

import { DisplayModeMasterEnum } from '../shared/enums';
import { StateService } from '../core/services/state.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayMode: DisplayModeMasterEnum;
  displayModeEnum = DisplayModeMasterEnum;

  constructor(private stateService: StateService) { }

  ngOnInit() {
    this.displayMode = this.stateService.displayModeMovies;
  }

  changeDisplayMode(mode: DisplayModeMasterEnum) {
    this.displayMode = mode;
    this.stateService.displayModeMovies = mode;
  }
}
