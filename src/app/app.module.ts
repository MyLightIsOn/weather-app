import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { ForecastComponent } from './forecast/forecast.component';
import { RadarComponent } from './radar/radar.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    ForecastComponent,
    RadarComponent,
    CitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
