import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieEditComponent } from './movie-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      { path: 'details', component: MovieDetailsComponent },
      { path: 'edit', component: MovieEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
  static components = [MovieComponent, MovieDetailsComponent, MovieEditComponent];
}
