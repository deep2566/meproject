(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-action-type-action-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/action-type/action-type.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/action-type/action-type.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n<div class=\"animated fadeIn\" >\n    <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Level 1 Actions Listing\n          <div class=\"card-header-actions\">\n            <button class=\"btn btn-primary btn-sm active\" >\n                Add\n              </button>\n            \n          </div>\n        </div>   \n        <div class=\"card-body\">\n            <!-- <div class=\"row mb-3\" *ngIf=\"!showSpinnner\">\n                <div class=\"col-md-4 offset-md-8\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by Collector Name\"/>\n                  </div>\n                </div>\n              </div> -->\n\n              <div class=\"sk-wave\" *ngIf=\"showSpinnner\" >\n                <div class=\"sk-rect sk-rect1\"></div>\n                <div class=\"sk-rect sk-rect2\"></div>\n                <div class=\"sk-rect sk-rect3\"></div>\n                <div class=\"sk-rect sk-rect4\"></div>\n                <div class=\"sk-rect sk-rect5\"></div>\n              </div>\n\n              <table *ngIf=\"!showSpinnner\" class=\"table table-bordered table-hover table-responsive-lg\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n                <thead>\n                  <tr>\n                    \n                    <th>\n                        <mfDefaultSorter>Name</mfDefaultSorter>\n                    </th>\n                    <th>\n                        <mfDefaultSorter>Action</mfDefaultSorter>\n                        \n                    </th>\n        \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of mf.data\" >\n                    <td>{{ item.name }}</td>\n                    <td>\n                      <div class=\"btn-group\" dropdown [autoClose]=\"true\">\n                        <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n                          Action<span class=\"caret\"></span>\n                        </button>\n                        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                          <!-- <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['edit', item.id]\">Edit</a></li> -->\n                          <li role=\"menuitem\"><a  class=\"dropdown-item\" (click)=\"delete(item.id, 'level1')\">Delete</a></li>\n                          \n                        </ul>\n                      </div>\n                    </td>\n                    \n                  </tr>\n                </tbody>\n        \n              </table>\n        </div> \n</div>");

/***/ }),

/***/ "./src/app/views/action-type/action-type-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/action-type/action-type-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActionTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypeRoutingModule", function() { return ActionTypeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _action_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-type.component */ "./src/app/views/action-type/action-type.component.ts");




var routes = [
    {
        path: '',
        component: _action_type_component__WEBPACK_IMPORTED_MODULE_3__["ActionTypeComponent"],
        data: {
            title: 'Action Type'
        }
    }
];
var ActionTypeRoutingModule = /** @class */ (function () {
    function ActionTypeRoutingModule() {
    }
    ActionTypeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ActionTypeRoutingModule);
    return ActionTypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/action-type/action-type.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/action-type/action-type.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FjdGlvbi10eXBlL2FjdGlvbi10eXBlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/views/action-type/action-type.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/action-type/action-type.component.ts ***!
  \************************************************************/
/*! exports provided: ActionTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypeComponent", function() { return ActionTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _action_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-type.service */ "./src/app/views/action-type/action-type.service.ts");




var ActionTypeComponent = /** @class */ (function () {
    function ActionTypeComponent(actionTypeService, toasterService) {
        this.actionTypeService = actionTypeService;
        this.toasterService = toasterService;
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.showSpinnner = true;
        this.filterQuery = '';
        this.actionData = {};
        this.getActionTypeData();
    }
    ActionTypeComponent.prototype.ngOnInit = function () {
    };
    ActionTypeComponent.prototype.getActionTypeData = function () {
        var _this = this;
        this.actionTypeService.getAction()
            .subscribe(function (data) {
            setTimeout(function () {
                console.log('data', data);
                _this.showSpinnner = false;
                _this.data = data;
            }, 100);
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    };
    ActionTypeComponent.prototype.delete = function (id, type) {
        var _this = this;
        if (confirm('Are you sure you want to delete?')) {
            this.actionTypeService.delete(id, type)
                .subscribe(function (data) {
                for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.id == id) {
                        _this.data.splice(_this.data.indexOf(item), 1);
                    }
                }
                _this.toasterService.pop('success', 'Collection', 'Collection has been deleted successfully.');
            });
        }
    };
    ActionTypeComponent.ctorParameters = function () { return [
        { type: _action_type_service__WEBPACK_IMPORTED_MODULE_3__["ActionTypeService"] },
        { type: angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"] }
    ]; };
    ActionTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-type',
            providers: [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]],
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./action-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/action-type/action-type.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./action-type.component.css */ "./src/app/views/action-type/action-type.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_action_type_service__WEBPACK_IMPORTED_MODULE_3__["ActionTypeService"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]])
    ], ActionTypeComponent);
    return ActionTypeComponent;
}());



/***/ }),

/***/ "./src/app/views/action-type/action-type.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/action-type/action-type.module.ts ***!
  \*********************************************************/
/*! exports provided: ActionTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypeModule", function() { return ActionTypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/views/action-type/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var _action_type_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./action-type-routing.module */ "./src/app/views/action-type/action-type-routing.module.ts");
/* harmony import */ var _action_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./action-type.component */ "./src/app/views/action-type/action-type.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");



// Collection








var ActionTypeModule = /** @class */ (function () {
    function ActionTypeModule() {
    }
    ActionTypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _action_type_component__WEBPACK_IMPORTED_MODULE_9__["ActionTypeComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _action_type_routing_module__WEBPACK_IMPORTED_MODULE_8__["ActionTypeRoutingModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_10__["ToasterModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot()
            ]
        })
    ], ActionTypeModule);
    return ActionTypeModule;
}());



/***/ }),

/***/ "./src/app/views/action-type/action-type.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/action-type/action-type.service.ts ***!
  \**********************************************************/
/*! exports provided: ActionTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypeService", function() { return ActionTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var ActionTypeService = /** @class */ (function () {
    function ActionTypeService(http) {
        this.http = http;
        this.dataUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'actions';
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'actions';
        this.actionurl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'actions';
        this.baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    ActionTypeService.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    ActionTypeService.prototype.getAction = function () {
        return this.http.get(this.actionurl + '/level1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    ActionTypeService.prototype.addAction = function (level_one, level_two, level_three, notes, collection_id) {
        var obj = {
            level_one: level_one, level_two: level_two, level_three: level_three, notes: notes, collection_id: collection_id
        };
        return this.http.post(this.uri + "/addaction", obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    ActionTypeService.prototype.delete = function (id, type) {
        return this
            .http
            .get(this.dataUrl + "/delete/" + id + "/" + type);
    };
    ActionTypeService.prototype.getComissions = function (id) {
        return this.http.get(this.baseurl + "invoice-generate/" + id);
    };
    ActionTypeService.prototype.addDbtAmount = function (data) {
        return this.http.post(this.baseurl + "collection/addDebtAmount", data);
    };
    ActionTypeService.prototype.handleError = function (error) {
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
    ActionTypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActionTypeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActionTypeService);
    return ActionTypeService;
}());



/***/ }),

/***/ "./src/app/views/action-type/datafilterpipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/action-type/datafilterpipe.ts ***!
  \*****************************************************/
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
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, function (row) { return row.collector_detail.name.indexOf(query) > -1; });
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
//# sourceMappingURL=views-action-type-action-type-module.js.map