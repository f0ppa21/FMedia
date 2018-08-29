
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { MaterialModule } from './material.module';

// import { ModalModule } from './modal/modal.module';
import { ToolbarComponent } from './toolbar/toolbar.component';

// import { DataService } from './services/data.service';

@NgModule({
  imports: [RouterModule, HttpClientModule, MaterialModule, FlexLayoutModule],
  exports: [RouterModule, HttpClientModule, MaterialModule, FlexLayoutModule, ToolbarComponent],
  declarations: [ToolbarComponent]
  // providers: [DataService] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
