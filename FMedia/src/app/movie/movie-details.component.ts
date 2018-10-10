import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../shared/router.animations';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  animations: [ slideInDownAnimation ]
})
export class MovieDetailsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  id: number;
  title: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];  // TODO: this.movieService.getMovie(+params['id']).subscribe((movie: IMovie) => { this.movie = movie; });
      // TODO: Ändra sedan så att Movie isf. sparas i this.movie-prop som används i template för att visa titeln...
      this.title = 'Gudfadern ' + this.id;
    });
  }
}
