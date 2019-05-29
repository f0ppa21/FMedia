import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

import { ModalDialogComponent } from './modal-dialog.component';

@Injectable()
export class ModalDialogService {

    constructor(private dialog: MatDialog, private overlay: Overlay) { }

    alert(config: any): Promise<boolean> {
      config.scrollStrategy = this.overlay.scrollStrategies.noop();
      config.disableClose = true;
      config.data.buttonAlign = 'center';
      config.data.okButtonText = config.data.okButtonText ? config.data.okButtonText : 'OK';

      const dialogRef = this.dialog.open(ModalDialogComponent, config);

      const promise = new Promise<boolean>((resolve, reject) => {
        dialogRef.afterClosed().subscribe(result => {
          resolve(true);
        });
      });

      return promise;
    }

    confirm(config: any): Promise<boolean> {
      config.scrollStrategy = this.overlay.scrollStrategies.noop();
      config.disableClose = true;
      config.data.isConfirm = true;
      config.data.buttonAlign = 'end';
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
