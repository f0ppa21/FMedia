import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.id = +params['id'];  // TODO: this.movieService.getMovie(+params['id']).subscribe((movie: IMovie) => { this.movie = movie; });
    });
  }

  // TODO: Testa om vi måste sätta scrollStrategy som för About för att undvika "hoppig" sida. Sätt helst i ModalDialogService...
  // TODO: Testa även på movies-sidan att öppna en Alert där... ska inte hoppa..
  // import { ModalDialogService } from '../core/modal-dialog/modal-dialog.service';
  // constructor(private modalDialogService: ModalDialogService) { }
  // openConfirm() {
  //   const self = this;
  //   this.modalDialogService.confirm({
  //     width: '400px',
  //     data: { title: 'Ta bort filmen?',
  //             message: 'Den kommer inte längre att finnas kvar... nä inte alls, den är helt omöjlig att få tillbaka!' }
  //   })
  //     .then(function(result) {
  //       self.confirmResult = result;
  //     });
  // }

  // openAlert() {
  //   this.modalDialogService.alert({ data: { title: 'Filmen är inte längre tillgänglig!' } })
  //     .then(function () {
  //       alert('Nu är vi tillbaka syncront!');
  //     });
  // }

}
