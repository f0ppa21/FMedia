import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: 'movies', loadChildren: './movies/movies.module#MoviesModule' },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard' } // Catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,
                                            scrollPositionRestoration: 'enabled' }) ],  // Check nav/route preloading: enableTracing: true
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
