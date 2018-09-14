import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from '../ensureModuleLoadedOnceGuard';

import { SharedModule } from '../../shared/shared.module';
import { ModalDialogComponent } from './modal-dialog.component';
import { ModalDialogService } from './modal-dialog.service';

@NgModule({
  imports: [SharedModule],
  entryComponents: [ModalDialogComponent],
  declarations: [ModalDialogComponent],
  providers: [ModalDialogService]
})
export class ModalDialogModule extends EnsureModuleLoadedOnceGuard {

  constructor(@Optional() @SkipSelf() parentModule: ModalDialogModule) {
    super(parentModule);
  }
}
