import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from '../ensureModuleLoadedOnceGuard';

import { SharedModule } from '../../shared/shared.module';
import { AboutDialogComponent } from './about-dialog.component';

@NgModule({
  imports: [SharedModule],
  entryComponents: [AboutDialogComponent],
  declarations: [AboutDialogComponent]
})
export class AboutDialogModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: AboutDialogModule) {
    super(parentModule);
  }
}
