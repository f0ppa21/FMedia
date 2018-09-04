import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [SharedModule, MoviesRoutingModule],
  declarations: [MoviesRoutingModule.components]
})
export class MoviesModule { }
