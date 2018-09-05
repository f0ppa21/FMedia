import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,                // Singleton objects (services, components that are loaded only once, etc.)
    DashboardModule,           // "Eager load" på denna då den visas direkt på startsidan, "Lazy load" på övriga features
    AppRoutingModule           // Main routes for application
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
