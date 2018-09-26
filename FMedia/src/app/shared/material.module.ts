import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatListModule,
  MatChipsModule,
  MatButtonToggleModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTableModule
  ]
})
export class MaterialModule { }
