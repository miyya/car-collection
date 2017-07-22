/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

/** import components. */
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Car }                from './car';
import { CarService }         from './car.service';

/** Component function. */
@Component({
  selector: 'my-cars',
  templateUrl: './cars.component.html',
  styleUrls: [ './cars.component.css' ]
})
/** Export class CarsComponents. */
export class CarsComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;

  constructor(
    private carService: CarService,
    private router: Router) { }

  getCars(): void {
    this.carService
        .getCars()
        .then(cars => this.cars = cars);
  }
/** add car name function. */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.carService.create(name)
      .then(car => {
        this.cars.push(car);
        this.selectedCar = null;
      });
  }
/** delete car function. */
  delete(car: Car): void {
    this.carService
        .delete(car.id)
        .then(() => {
          this.cars = this.cars.filter(h => h !== car);
          if (this.selectedCar === car) { this.selectedCar = null; }
        });
  }
/** view car function. */
  ngOnInit(): void {
    this.getCars();
  }
/** on select car function. */
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
/** view detail car function. */
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCar.id]);
  }
}
