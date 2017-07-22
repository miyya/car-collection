/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

 //imports module for the application
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
////module module for the application
import { DashboardComponent }   from './dashboard.component';
import { CarsComponent }      from './cars.component';
import { CarDetailComponent }  from './car-detail.component';
//const for the routng
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: CarDetailComponent },
  { path: 'cars',     component: CarsComponent }
];
//ngMule for routing in AngularJS
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
//export routing modules
export class AppRoutingModule {}
