import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ModalDialogService } from '../core/modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  id: number;
  title: string; // TODO: Ändra sedan så att titeln live visar det man skriver i titel-textboxen + om den är tom visas title (ng if)

  constructor(
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];  // TODO: this.movieService.getMovie(this.id).subscribe((movie: IMovie) => { this.movie = movie; });
      this.title = (this.id === 0 ? 'Lägg till film' : 'Redigera film');
    });
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
    this.modalDialogService.alert({ data: { title: 'Filmen är inte längre tillgänglig!' } })
      .then(function () {
        alert('Nu är vi tillbaka syncront!');
      });
  }
}
