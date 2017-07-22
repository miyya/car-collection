/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

//imports module and components for the application
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
//import car search service
import { CarSearchService } from './car-search.service';
import { Car } from './car';
//componenet function
@Component({
  selector: 'car-search',
  templateUrl: './car-search.component.html',
  styleUrls: [ './car-search.component.css' ],
  providers: [CarSearchService]
})
//export source code to CarSearchComponent JS file
export class CarSearchComponent implements OnInit {
  cars: Observable<Car[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private carSearchService: CarSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.cars = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.carSearchService.search(term)
        // or the observable of empty cars if there was no search term
        : Observable.of<Car[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Car[]>([]);
      });
  }
// navigating to car detail section
  gotoDetail(car: Car): void {
    let link = ['/detail', car.id];
    this.router.navigate(link);
  }
}
