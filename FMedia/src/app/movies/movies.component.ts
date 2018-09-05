import { Component, OnInit, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../shared/router.animations';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  animations: [slideInDownAnimation]
})
export class MoviesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
