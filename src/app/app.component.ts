/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */

 //import components
import { Component }          from '@angular/core';
//component function
@Component({
  //selectpr my-app
  selector: 'my-app',
  //app.component js file source code 
  template: `
  <div class='panel-body'> <nav class='navbar navbar-inverse'>  
     <h1 style='color:white;'>. <b>{{title}}</b></h1>
    
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/cars" routerLinkActive="active">Cars</a>
    <div >   </div></nav>
    <router-outlet></router-outlet> </div> 
  `,
  //CSS file location for the file 
  styleUrls: ['./app.component.css']
})
//export class for applciation title
export class AppComponent {
  title = 'Car Collection';
}
