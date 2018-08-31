import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule                // Singleton objects (services, components that are loaded only once, etc.)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
