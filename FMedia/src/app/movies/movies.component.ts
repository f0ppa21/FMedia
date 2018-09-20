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
