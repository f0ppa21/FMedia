import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [SharedModule, RouterModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule { }
