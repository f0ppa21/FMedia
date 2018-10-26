import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material.module';

@NgModule({
  exports: [ CommonModule, MaterialModule, FlexLayoutModule, ReactiveFormsModule ]
})
export class SharedModule {}  // Exports Shared (multi-instance) objects
