"use strict";
/**
 * Author:  Ahmed Muneer
 * SID:     S1203016285
 * Program: MScIT Batch 2
 * Intake:  Jan 2017
 * Center:  UWE, Villa College
 * Email:   Ahmed2.Muneer@live.uwe.ac.uk
 */
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
/** import components. */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var car_service_1 = require("./car.service");
/** Component function. */
var CarsComponent = (function () {
    function CarsComponent(carService, router) {
        this.carService = carService;
        this.router = router;
    }
    CarsComponent.prototype.getCars = function () {
        var _this = this;
        this.carService
            .getCars()
            .then(function (cars) { return _this.cars = cars; });
    };
    /** add car name function. */
    CarsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.carService.create(name)
            .then(function (car) {
            _this.cars.push(car);
            _this.selectedCar = null;
        });
    };
    /** delete car function. */
    CarsComponent.prototype.delete = function (car) {
        var _this = this;
        this.carService
            .delete(car.id)
            .then(function () {
            _this.cars = _this.cars.filter(function (h) { return h !== car; });
            if (_this.selectedCar === car) {
                _this.selectedCar = null;
            }
        });
    };
    /** view car function. */
    CarsComponent.prototype.ngOnInit = function () {
        this.getCars();
    };
    /** on select car function. */
    CarsComponent.prototype.onSelect = function (car) {
        this.selectedCar = car;
    };
    /** view detail car function. */
    CarsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedCar.id]);
    };
    return CarsComponent;
}());
CarsComponent = __decorate([
    core_1.Component({
        selector: 'my-cars',
        templateUrl: './cars.component.html',
        styleUrls: ['./cars.component.css']
    })
    /** Export class CarsComponents. */
    ,
    __metadata("design:paramtypes", [car_service_1.CarService,
        router_1.Router])
], CarsComponent);
exports.CarsComponent = CarsComponent;
//# sourceMappingURL=cars.component.js.map