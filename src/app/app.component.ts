import {Component, OnInit} from '@angular/core';
import {Weather} from './weather.model';
import {WeatherDataService} from './weather-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    weather: Weather;

    constructor(private weatherDataService: WeatherDataService) {};

    ngOnInit() {
        this.getWeather();
    }

    getWeather() {
        this.weatherDataService.getWeather()
            .subscribe(
                weather => this.weather = weather
            );
    }
}
