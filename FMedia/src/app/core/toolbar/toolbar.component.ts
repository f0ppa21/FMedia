import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AboutDialogComponent, AboutDialogDefaultConfig } from '../about-dialog/about-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog) {}

  openAboutDialog() {
    this.dialog.open(AboutDialogComponent, AboutDialogDefaultConfig);
  }
}
