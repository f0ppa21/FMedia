
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

import { ToolbarModule } from './toolbar/toolbar.module';
import { ModalDialogModule } from './modal-dialog/modal-dialog.module';
import { StateService } from './services/state.service';

@NgModule({
  exports: [ToolbarModule, ModalDialogModule],
  providers: [StateService] // These should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
