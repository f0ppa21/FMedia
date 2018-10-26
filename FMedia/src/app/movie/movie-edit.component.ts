import { Component, OnInit, HostBinding } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IMovie } from '../shared/interfaces';
import { slideInDownAnimation } from '../shared/router.animations';
import { ModalDialogService } from '../core/modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
  animations: [ slideInDownAnimation ]
})
export class MovieEditComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  id: number;
  title: string; // TODO: Ändra sedan så att titeln live visar det man skriver i titel-textboxen + om den är tom visas title (ng if)
  customerForm: FormGroup;
  movie: IMovie;
  message: string;


  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private modalDialogService: ModalDialogService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];  // TODO: this.movieService.getMovie(this.id).subscribe((movie: IMovie) => { this.movie = movie; });
      this.title = (this.id === 0 ? 'Lägg till film' : 'Redigera film');
    });

    // TODO: Om det är en ny film sätts tomma default-värden, dvs gör ingen subscribe som ovan då...
    this.movie = {
      title: 'Mad Max'
    };

    this.customerForm = this.formBuilder.group({
      title: [this.movie.title, Validators.required ]
    });
  }

  onSubmit() {
    this.message = 'You typed: ' + this.customerForm.value.title;
  }

  cancel(event: Event) {
    event.preventDefault();
    this.location.back();
  }

  openConfirm() {
    const self = this;
    this.modalDialogService.confirm({
      width: '400px',
      data: { title: 'Ta bort filmen?',
              message: 'Den kommer inte längre att finnas kvar... nä inte alls, den är helt omöjlig att få tillbaka!' }
    })
      .then(function(result) {
        // self.confirmResult = result;
      });
  }

  openAlert() {
    this.modalDialogService.alert({ data: { title: 'Implementation saknas!' } });
  }
}
