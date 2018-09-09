import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from './toolbar.component';
import { AboutDialogModule } from '../about-dialog/about-dialog.module';

@NgModule({
  imports: [SharedModule, RouterModule, AboutDialogModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule { }
