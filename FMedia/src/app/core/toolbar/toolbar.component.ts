import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {Overlay} from '@angular/cdk/overlay';

import { AboutDialogComponent, AboutDialogDefaultConfig } from '../about-dialog/about-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog, overlay: Overlay) {
    AboutDialogDefaultConfig.scrollStrategy = overlay.scrollStrategies.noop();
  }

  openAboutDialog() {
    this.dialog.open(AboutDialogComponent, AboutDialogDefaultConfig);
  }
}
