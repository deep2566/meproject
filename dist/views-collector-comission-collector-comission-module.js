(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-collector-comission-collector-comission-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector-comission /collector-comission.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector-comission /collector-comission.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"animated fadeIn\" >\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> Collector Comission\n      <div class=\"card-header-actions\">\n        <button *ngIf=\"currentUser.role==1\" (click)=\"downloadCollection()\" class=\"btn btn-primary btn-sm active\">\n          <i  class=\"cui-cloud-download icons\"></i> Download\n        </button>\n      </div>\n    </div>\n    \n    <div class=\"card-body\">\n      <div class=\"row mb-3\" *ngIf=\"!showSpinnner\">\n        <div class=\"col-md-4 offset-md-8\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by Collector Name\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"sk-wave\" *ngIf=\"showSpinnner\" >\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n      <table *ngIf=\"!showSpinnner\" class=\"table table-bordered table-hover table-responsive-lg\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n        <thead>\n          <tr>\n            <th >\n              <mfDefaultSorter by=\"name\">Collection Id</mfDefaultSorter>\n            </th>\n            <th >\n              <mfDefaultSorter by=\"name\">Client Name</mfDefaultSorter>\n            </th>\n            <th >\n              <mfDefaultSorter by=\"collector_name\">Collector Name</mfDefaultSorter>\n            </th>\n            <th >\n              <mfDefaultSorter by=\"debtor_name\">Debtor Name</mfDefaultSorter>\n            </th>\n\n\n            <th >\n              <mfDefaultSorter by=\"paid_amount\">Collected Amount</mfDefaultSorter>\n            </th>\n            <th >\n              <mfDefaultSorter by=\"fee_collect\">Collection Fee</mfDefaultSorter>\n            </th>\n            <th >\n              <mfDefaultSorter by=\"fee_collect\">Created</mfDefaultSorter>\n            </th>\n            <th >\n              <mfDefaultSorter>Action</mfDefaultSorter>\n            </th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\">\n            <td>#{{item.collection_id}}</td>\n            <td>{{item.client_name}}</td>\n            <td>{{item.collector_name}}</td>\n            <td>{{item.debtor_name}}</td>\n\n            <td>{{item.paid_amount}}</td>\n            <td>{{item.fee_collect}}</td>\n            <td>{{item.created}}</td>\n            <td>\n              <div class=\"btn-group\" dropdown [autoClose]=\"true\">\n                <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n                  Action<span class=\"caret\"></span>\n                </button>\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['/invoice-generate', item.collection_id]\">Make Invoice</a></li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n\t\t<tfoot>\n          <tr>\n            <td colspan=\"7\">\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./src/app/views/collector-comission /collector-comission-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/collector-comission /collector-comission-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CollectorComissionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorComissionRoutingModule", function() { return CollectorComissionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collector_comission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collector-comission.component */ "./src/app/views/collector-comission /collector-comission.component.ts");




var routes = [
    {
        path: '',
        component: _collector_comission_component__WEBPACK_IMPORTED_MODULE_3__["CollectorComissionComponent"],
        data: {
            title: 'Collector Comission'
        }
    }
];
var CollectorComissionRoutingModule = /** @class */ (function () {
    function CollectorComissionRoutingModule() {
    }
    CollectorComissionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CollectorComissionRoutingModule);
    return CollectorComissionRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/collector-comission /collector-comission.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/collector-comission /collector-comission.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CollectorComissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorComissionComponent", function() { return CollectorComissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _collector_comission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collector-comission.service */ "./src/app/views/collector-comission /collector-comission.service.ts");





var CollectorComissionComponent = /** @class */ (function () {
    function CollectorComissionComponent(CollectorComissionService) {
        var _this = this;
        this.CollectorComissionService = CollectorComissionService;
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.filterQuery = '';
        this.showSpinnner = true;
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.CollectorComissionService.getData()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.showSpinnner = false;
                _this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(data);
            }, 100);
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    }
    CollectorComissionComponent.prototype.toInt = function (num) {
        return +num;
    };
    CollectorComissionComponent.prototype.getDate = function (regDate) {
        var date = new Date(regDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
    };
    CollectorComissionComponent.prototype.downloadCollection = function () {
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'download-collector-comission';
    };
    CollectorComissionComponent.ctorParameters = function () { return [
        { type: _collector_comission_service__WEBPACK_IMPORTED_MODULE_4__["CollectorComissionService"] }
    ]; };
    CollectorComissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collector-comission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector-comission /collector-comission.component.html")).default,
            providers: [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"], _collector_comission_service__WEBPACK_IMPORTED_MODULE_4__["CollectorComissionService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../node_modules/ladda/dist/ladda-themeless.min.css */ "./node_modules/ladda/dist/ladda-themeless.min.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_collector_comission_service__WEBPACK_IMPORTED_MODULE_4__["CollectorComissionService"]])
    ], CollectorComissionComponent);
    return CollectorComissionComponent;
}());



/***/ }),

/***/ "./src/app/views/collector-comission /collector-comission.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/collector-comission /collector-comission.module.ts ***!
  \**************************************************************************/
/*! exports provided: CollectorComissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorComissionModule", function() { return CollectorComissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/views/collector-comission /datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _collector_comission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./collector-comission.component */ "./src/app/views/collector-comission /collector-comission.component.ts");
/* harmony import */ var _collector_comission_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collector-comission-routing.module */ "./src/app/views/collector-comission /collector-comission-routing.module.ts");



// Collection




// Routing






//
var CollectorComissionModule = /** @class */ (function () {
    function CollectorComissionModule() {
    }
    CollectorComissionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _collector_comission_routing_module__WEBPACK_IMPORTED_MODULE_12__["CollectorComissionRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                angular2_ladda__WEBPACK_IMPORTED_MODULE_8__["LaddaModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot()
            ],
            declarations: [
                _collector_comission_component__WEBPACK_IMPORTED_MODULE_11__["CollectorComissionComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                    multi: true
                }]
        })
    ], CollectorComissionModule);
    return CollectorComissionModule;
}());



/***/ }),

/***/ "./src/app/views/collector-comission /collector-comission.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/collector-comission /collector-comission.service.ts ***!
  \***************************************************************************/
/*! exports provided: CollectorComissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorComissionService", function() { return CollectorComissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var CollectorComissionService = /** @class */ (function () {
    function CollectorComissionService(http) {
        this.http = http;
        this.dataUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'collectorcomission';
    }
    CollectorComissionService.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    CollectorComissionService.prototype.handleError = function (error) {
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
    CollectorComissionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CollectorComissionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CollectorComissionService);
    return CollectorComissionService;
}());



/***/ }),

/***/ "./src/app/views/collector-comission /datafilterpipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/collector-comission /datafilterpipe.ts ***!
  \**************************************************************/
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
            console.log(query);
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



/***/ })

}]);
//# sourceMappingURL=views-collector-comission-collector-comission-module.js.map