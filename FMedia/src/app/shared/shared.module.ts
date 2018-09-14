import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

@NgModule({
  exports: [ CommonModule, MaterialModule, FlexLayoutModule ]
})
export class SharedModule {}  // Exports Shared (multi-instance) objects
