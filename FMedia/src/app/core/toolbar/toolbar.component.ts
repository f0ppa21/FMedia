import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AboutDialogComponent } from '../about-dialog/about-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public aboutDialog: MatDialog) {}

  openAboutDialog() {
    const dialogRef = this.aboutDialog.open(AboutDialogComponent, {
      width: '400px',
      position: {top: '200px'}
    });
  }
}
