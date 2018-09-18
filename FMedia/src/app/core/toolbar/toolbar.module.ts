import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from '../ensureModuleLoadedOnceGuard';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from './toolbar.component';
import { AboutDialogModule } from '../about-dialog/about-dialog.module';

@NgModule({
  imports: [SharedModule, RouterModule, AboutDialogModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: ToolbarModule) {
    super(parentModule);
  }
}
