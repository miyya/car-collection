/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

/** import component for the file. */
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Car }        from './car';
import { CarService } from './car.service';

/** component function. */
@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: [ './car-detail.component.css' ]
})
//export code to car detail component
export class CarDetailComponent implements OnInit {
  car: Car;
//constructor for getting location
  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
//naviagte
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.carService.getCar(+params.get('id')))
      .subscribe(car => this.car = car);
  }
//save cr detail
  save(): void {
    this.carService.update(this.car)
      .then(() => this.goBack());
  }
//go abck navigation
  goBack(): void {
    this.location.back();
  }
}
