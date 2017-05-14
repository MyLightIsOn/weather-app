import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Weather} from './weather.model';

@Injectable()
export class WeatherDataService {
    private weatherUrl = '';

    constructor(private http: Http) {}

    getWeather(): Observable<Weather> {
        return this.http.get(this.weatherUrl)
            .map(this.extractedData);
    }

    private extractedData(res: Response) {
        const body = res.json();
        return body.data || {};
    }
}
