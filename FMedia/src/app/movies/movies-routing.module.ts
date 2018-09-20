import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MoviesCardComponent } from './movies-card.component';
import { MoviesGridComponent } from './movies-grid.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule {
  static components = [ MoviesComponent, MoviesCardComponent, MoviesGridComponent ];
}
