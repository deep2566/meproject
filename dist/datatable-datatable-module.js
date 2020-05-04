(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datatable-datatable-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tables/datatable/datatable.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tables/datatable/datatable.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Collections Listing\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row mb-3\">\n        <div class=\"col-md-4 offset-md-8\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by name\"/>\n          </div>\n        </div>\n      </div>\n      <table class=\"table table-striped table-hover table-responsive-lg\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n        <thead>\n          <tr>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"name\">Client Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 35%\">\n              <mfDefaultSorter by=\"email\">Collector Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"age\">Debtor Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"city\">Amount</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"city\">Remaining Amount</mfDefaultSorter>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\">\n            <td>{{item.name}}</td>\n            <td>{{item.email}}</td>\n            <td class=\"text-left\">{{item.age}}</td>\n            <td>{{item.city | uppercase}}</td>\n            <td>{{getDate(item.regDate)}}</td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"5\">\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/tables/datatable/datafilterpipe.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/tables/datatable/datafilterpipe.ts ***!
  \**********************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DataFilterPipe = /** @class */ (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, function (row) { return row.name.indexOf(query) > -1; });
        }
        return array;
    };
    DataFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
            name: 'dataFilter'
        })
    ], DataFilterPipe);
    return DataFilterPipe;
}());



/***/ }),

/***/ "./src/app/views/tables/datatable/datatable-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/tables/datatable/datatable-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: DatatableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRoutingModule", function() { return DatatableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatable.component */ "./src/app/views/tables/datatable/datatable.component.ts");




var routes = [
    {
        path: '',
        component: _datatable_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"],
        data: {
            title: 'DataTable'
        }
    }
];
var DatatableRoutingModule = /** @class */ (function () {
    function DatatableRoutingModule() {
    }
    DatatableRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DatatableRoutingModule);
    return DatatableRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/tables/datatable/datatable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/tables/datatable/datatable.component.ts ***!
  \***************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _datatable_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatable.service */ "./src/app/views/tables/datatable/datatable.service.ts");



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(dataTableService) {
        var _this = this;
        this.dataTableService = dataTableService;
        this.filterQuery = '';
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        this.dataTableService.getData()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(data);
            }, 1000);
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    }
    DataTableComponent.prototype.toInt = function (num) {
        return +num;
    };
    DataTableComponent.prototype.getDate = function (regDate) {
        var date = new Date(regDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
    };
    DataTableComponent.ctorParameters = function () { return [
        { type: _datatable_service__WEBPACK_IMPORTED_MODULE_2__["DataTableService"] }
    ]; };
    DataTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./datatable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tables/datatable/datatable.component.html")).default,
            providers: [_datatable_service__WEBPACK_IMPORTED_MODULE_2__["DataTableService"]],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_datatable_service__WEBPACK_IMPORTED_MODULE_2__["DataTableService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/views/tables/datatable/datatable.module.ts":
/*!************************************************************!*\
  !*** ./src/app/views/tables/datatable/datatable.module.ts ***!
  \************************************************************/
/*! exports provided: DatatableInitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableInitModule", function() { return DatatableInitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/views/tables/datatable/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _datatable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datatable.component */ "./src/app/views/tables/datatable/datatable.component.ts");
/* harmony import */ var _datatable_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatable-routing.module */ "./src/app/views/tables/datatable/datatable-routing.module.ts");



// DataTable





// Routing

//
var DatatableInitModule = /** @class */ (function () {
    function DatatableInitModule() {
    }
    DatatableInitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _datatable_routing_module__WEBPACK_IMPORTED_MODULE_8__["DatatableRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [
                _datatable_component__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ]
        })
    ], DatatableInitModule);
    return DatatableInitModule;
}());



/***/ }),

/***/ "./src/app/views/tables/datatable/datatable.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/tables/datatable/datatable.service.ts ***!
  \*************************************************************/
/*! exports provided: DataTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableService", function() { return DataTableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DataTableService = /** @class */ (function () {
    function DataTableService(http) {
        this.http = http;
        this.dataUrl = 'assets/data.json';
    }
    DataTableService.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    DataTableService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    DataTableService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataTableService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataTableService);
    return DataTableService;
}());



/***/ })

}]);
//# sourceMappingURL=datatable-datatable-module.js.map