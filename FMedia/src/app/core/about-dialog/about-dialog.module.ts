import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { AboutDialogComponent } from './about-dialog.component';

@NgModule({
  imports: [SharedModule],
  entryComponents: [AboutDialogComponent],
  declarations: [AboutDialogComponent]
})
export class AboutDialogModule { }
