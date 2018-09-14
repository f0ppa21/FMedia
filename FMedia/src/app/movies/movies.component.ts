import { Component, OnInit } from '@angular/core';

import { ModalDialogService } from '../core/modal-dialog/modal-dialog.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  confirmResult: Promise<boolean>;

  constructor(private modalDialogService: ModalDialogService) { }

  ngOnInit() { }

  openConfirm() {
    // TODO: Kolla om man kan göra om Promise till Observable? (slipper då async i vyn?! - Kolla Dans kurs-material)
    this.confirmResult = this.modalDialogService.confirm({
      data: { title: 'Ta bort filmen?',
              message: 'Den kommer inte längre att finnas kvar...' }
    });
  }
}
