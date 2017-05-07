import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
  Generated class for the SwapiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SWapi {
  constructor(public http: Http){

  }

  getShip(): Observable<any> {
    var apiUrl = 'http://swapi.co/api/vehicles/' + this.getRandomInt(1,39) + '/';

    return this.http.get(apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPlanet(): Observable<any> {
    var apiUrl = 'http://swapi.co/api/planets/' + this.getRandomInt(1,61) + '/';

    return this.http.get(apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getSpecies(): Observable<any> {
    var apiUrl = 'http://swapi.co/api/species/' + this.getRandomInt(1,37) + '/';

    return this.http.get(apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getPerson(): Observable<any> {
    var apiUrl = 'http://swapi.co/api/people/' + this.getRandomInt(1,37) + '/';

    return this.http.get(apiUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  private handleError (error: Response | any) {
    let errorMsg = error.json();
    console.log(errorMsg);

    return Observable.throw(errorMsg);
  }

  public getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
