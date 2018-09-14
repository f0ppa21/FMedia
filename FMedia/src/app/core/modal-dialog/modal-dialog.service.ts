import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ModalDialogComponent } from './modal-dialog.component';

@Injectable()
export class ModalDialogService {

    constructor(public dialog: MatDialog) { }

    confirm(config: any): Promise<boolean> {
      const dialogRef = this.dialog.open(ModalDialogComponent, config);

      const promise = new Promise<boolean>((resolve, reject) => {
        dialogRef.afterClosed().subscribe(result => {
          resolve(result);
        });
      });

      return promise;
    }
}
