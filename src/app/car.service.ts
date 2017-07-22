/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */
//imports Services componenets for the application
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
//import toPromise
import 'rxjs/add/operator/toPromise';
//import cars data
import { Car } from './car';
//calling to InJectable function
@Injectable()
//export carService class
export class CarService {
//headers to Jason file
  private headers = new Headers({'Content-Type': 'application/json'});
  private carsUrl = 'api/cars';  // URL to web api
//instruction on HTTP
  constructor(private http: Http) { }
  //cars data to array car[]
  getCars(): Promise<Car[]> {
    return this.http.get(this.carsUrl)
               .toPromise()
               .then(response => response.json().data as Car[])
               .catch(this.handleError);
  }

//get car information function
  getCar(id: number): Promise<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Car)
      .catch(this.handleError);
  }
//delete function
  delete(id: number): Promise<void> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
//create car name function
  create(name: string): Promise<Car> {
    return this.http
      .post(this.carsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Car)
      .catch(this.handleError);
  }
//update car data
  update(car: Car): Promise<Car> {
    const url = `${this.carsUrl}/${car.id}`;
    return this.http
      .put(url, JSON.stringify(car), {headers: this.headers})
      .toPromise()
      .then(() => car)
      .catch(this.handleError);
  }
//headle error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
