import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ModalDialogComponent } from './modal-dialog.component';

@Injectable()
export class ModalDialogService {

    constructor(public dialog: MatDialog) { }

    alert(config: any) {
      config.disableClose = true;
      config.data.okButtonText = config.data.okButtonText ? config.data.okButtonText : 'OK';

      this.dialog.open(ModalDialogComponent, config);
    }

    confirm(config: any): Promise<boolean> {
      config.disableClose = true;
      config.data.isConfirm = true;
      config.data.okButtonText = config.data.okButtonText ? config.data.okButtonText : 'OK';
      config.data.cancelButtonText = config.data.cancelButtonText ? config.data.cancelButtonText : 'Avbryt';

      const dialogRef = this.dialog.open(ModalDialogComponent, config);

      const promise = new Promise<boolean>((resolve, reject) => {
        dialogRef.afterClosed().subscribe(result => {
          resolve(result);
        });
      });

      return promise;
    }
}
