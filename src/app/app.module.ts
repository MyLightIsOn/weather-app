import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {TodayComponent} from './today/today.component';
import {ForecastComponent} from './forecast/forecast.component';
import {RadarComponent} from './radar/radar.component';
import {CitiesComponent} from './cities/cities.component';
import {WeatherDataService} from "./weather-data.service";

const appRoutes: Routes = [
    {path: '', component: TodayComponent},
    {path: 'today', component: TodayComponent},
    {path: 'forecast', component: ForecastComponent},
    {path: 'radar', component: RadarComponent},
    {path: 'cities', component: CitiesComponent}
];

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
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        WeatherDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
