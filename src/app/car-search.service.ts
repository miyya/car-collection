/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

 //impoort modules and components
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
//import observable
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import car data
import { Car }           from './car';
//calling to Injectable function
@Injectable()
//export source code to CarSearchService 
export class CarSearchService {
//constructor
  constructor(private http: Http) {}
//search fucntion
  search(term: string): Observable<Car[]> {
    //returns http
    return this.http
               .get(`api/cars/?name=${term}`)
               .map(response => response.json().data as Car[]);
  }
}
