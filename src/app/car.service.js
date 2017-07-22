"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */
//imports Services componenets for the application
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
//import toPromise
require("rxjs/add/operator/toPromise");
//calling to InJectable function
var CarService = (function () {
    //instruction on HTTP
    function CarService(http) {
        this.http = http;
        //headers to Jason file
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.carsUrl = 'api/cars'; // URL to web api
    }
    //cars data to array car[]
    CarService.prototype.getCars = function () {
        return this.http.get(this.carsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //get car information function
    CarService.prototype.getCar = function (id) {
        var url = this.carsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //delete function
    CarService.prototype.delete = function (id) {
        var url = this.carsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    //create car name function
    CarService.prototype.create = function (name) {
        return this.http
            .post(this.carsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //update car data
    CarService.prototype.update = function (car) {
        var url = this.carsUrl + "/" + car.id;
        return this.http
            .put(url, JSON.stringify(car), { headers: this.headers })
            .toPromise()
            .then(function () { return car; })
            .catch(this.handleError);
    };
    //headle error
    CarService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CarService;
}());
CarService = __decorate([
    core_1.Injectable()
    //export carService class
    ,
    __metadata("design:paramtypes", [http_1.Http])
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map