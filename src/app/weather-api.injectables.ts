import {
    WeatherDataService,
    WEATHER_API_KEY,
    WEATHER_API_URL
} from './weather-data.service';

export const weatherApiInjectables: Array<any> = [
    {provide: WeatherDataService, useClass: WeatherDataService},
    {provide: WEATHER_API_KEY, useValue: WEATHER_API_KEY},
    {provide: WEATHER_API_URL, useValue: WEATHER_API_URL}
];

