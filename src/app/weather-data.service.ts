import {Inject, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Weather} from './weather.model';

export const WEATHER_API_KEY = 'APPID=81ffcfc446c9289f2ad9c2c8091b842a';
export const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/weather';

@Injectable()
export class WeatherDataService {
    constructor(private http: Http,
    @Inject(WEATHER_API_KEY) private apiKey: string,
    @Inject(WEATHER_API_URL) private apiUrl: string){
    }

    getWeather(query: string): Observable<Weather> {
      const params: string = [
          `${query}`,
          `${this.apiKey}`
      ].join('&');
      const queryUrl = `${this.apiUrl}?q=${params}`;
      return this.http.get(queryUrl)
          .map(this.extractedData);
    }

    private extractedData(res: Response) {
        const body = res.json();
        console.log(body);
        return body.data || {};
    }
}
