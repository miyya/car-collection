/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

 //imports modules adn components for the application
import { Component, OnInit } from '@angular/core';
import { Car }        from './car';
import { CarService } from './car.service';
//component function
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
//export source code to DashboardComponent file
export class DashboardComponent implements OnInit {
  cars: Car[] = [];
//constructor
  constructor(private carService: CarService) { }
//navigation
  ngOnInit(): void {
    this.carService.getCars()
      .then(cars => this.cars = cars.slice(1, 5));
  }
}
