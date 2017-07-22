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
//imports module and components for the application
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
//import car search service
var car_search_service_1 = require("./car-search.service");
//componenet function
var CarSearchComponent = (function () {
    function CarSearchComponent(carSearchService, router) {
        this.carSearchService = carSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    CarSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    CarSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cars = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.carSearchService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    // navigating to car detail section
    CarSearchComponent.prototype.gotoDetail = function (car) {
        var link = ['/detail', car.id];
        this.router.navigate(link);
    };
    return CarSearchComponent;
}());
CarSearchComponent = __decorate([
    core_1.Component({
        selector: 'car-search',
        templateUrl: './car-search.component.html',
        styleUrls: ['./car-search.component.css'],
        providers: [car_search_service_1.CarSearchService]
    })
    //export source code to CarSearchComponent JS file
    ,
    __metadata("design:paramtypes", [car_search_service_1.CarSearchService,
        router_1.Router])
], CarSearchComponent);
exports.CarSearchComponent = CarSearchComponent;
//# sourceMappingURL=car-search.component.js.map