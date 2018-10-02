import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [MovieRoutingModule, SharedModule],
  declarations: [MovieRoutingModule.components]
})
export class MovieModule { }
