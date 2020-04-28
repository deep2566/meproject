(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-add-product-add-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-add/product-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-add/product-add.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> User Add\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn  btn-info\">\n               <i class=\"cui-arrow-left icons\"></i> Back</button>\n          </div>\n        </div>\n          <div class=\"card-body row\">\n            \n            <div class=\"col-md-8\">\n              <form [formGroup]=\"angForm\" novalidate>\n                <div class=\"form-group\">\n                  <label for=\"name\" class=\"col-form-label\">Name</label>\n                  <input type=\"text\" class=\"form-control\" \n                    formControlName=\"name\" \n                    #name />\n                </div>\n                <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['name'].errors.required\">\n                    Name field is required.\n                  </div>\n                  <div *ngIf=\"angForm.controls['name'].errors.minLength\">\n                   dsfsdfsdfsd\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\">Username</label>\n                  <input type=\"text\" class=\"form-control\" \n                    formControlName=\"username\" \n                    #username />\n                </div>\n                <div *ngIf=\"angForm.controls['username'].invalid && (angForm.controls['username'].dirty || angForm.controls['username'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['username'].errors.required\">\n                    Username field is required.\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\">Email</label>\n                  <input type=\"text\" class=\"form-control\" \n                    formControlName=\"email\" \n                    #email />\n                </div>\n                <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['email'].errors.required\">\n                    Email field is required.\n                  </div>\n                  <div *ngIf=\"angForm.controls['email'].errors.email\">\n                    Please enter valid email address.\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\">Role</label>\n                  <select  class=\"form-control\" \n                    formControlName=\"role\" \n                    #role >\n                    <option value=\"{{item.id}}\" *ngFor=\"let item of roles\">{{ item.role_name}}</option>\n                  </select>\n                </div>\n                <div *ngIf=\"angForm.controls['role'].invalid && (angForm.controls['role'].dirty || angForm.controls['role'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['role'].errors.required\">\n                    Role field is required.\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"col-form-label\">Password</label>\n                  <input type=\"password\" class=\"form-control\" \n                    formControlName=\"password\" \n                    #password />\n                </div>\n\n                <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['password'].errors.required\">\n                    Password field is required.\n                  </div>\n                  <div *ngIf=\"angForm.controls['password'].errors.minLength\">\n                   Please enter minimum 6 characters.\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <button [ladda]='loading' (click) = \"add(name.value,username.value,email.value,password.value,role.value)\" type=\"submit\" class=\"btn btn-primary\"\n                    [disabled]=\"angForm.pristine || angForm.invalid\" >\n                    Submit\n                    </button>\n                    <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n                </div>\n              </form>\n            </div>\n            \n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/product-add/datafilterpipe.ts":
/*!***********************************************!*\
  !*** ./src/app/product-add/datafilterpipe.ts ***!
  \***********************************************/
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

/***/ "./src/app/product-add/product-add-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-add/product-add-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductAddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddRoutingModule", function() { return ProductAddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-add.component */ "./src/app/product-add/product-add.component.ts");




var routes = [
    {
        path: '',
        component: _product_add_component__WEBPACK_IMPORTED_MODULE_3__["ProductAddComponent"],
        data: {
            title: 'User Add'
        }
    }
];
var ProductAddRoutingModule = /** @class */ (function () {
    function ProductAddRoutingModule() {
    }
    ProductAddRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductAddRoutingModule);
    return ProductAddRoutingModule;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtYWRkL3Byb2R1Y3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");






var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(fb, alertService, ps, router) {
        var _this = this;
        this.fb = fb;
        this.alertService = alertService;
        this.ps = ps;
        this.router = router;
        this.loading = false;
        this.roles = {};
        this.createForm();
        this.ps.getRoles()
            .subscribe(function (data) {
            _this.roles = data;
        });
    }
    ProductAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductAddComponent.prototype.add = function (name, username, email, password, role) {
        var _this = this;
        this.loading = true;
        this.ps.add(name, username, email, password, role)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('User has been added successfully.', true);
            _this.router.navigate(['/users']);
        });
    };
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent.prototype.back = function () {
        this.router.navigate(['/users']);
    };
    ProductAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _views_notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ProductAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-add/product-add.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _views_notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product-add/product-add.module.ts ***!
  \***************************************************/
/*! exports provided: ProductAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddModule", function() { return ProductAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/product-add/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _product_add_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-add-routing.module */ "./src/app/product-add/product-add-routing.module.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");



// ProductAdd





// Routing



//
var ProductAddModule = /** @class */ (function () {
    function ProductAddModule() {
    }
    ProductAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _product_add_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductAddRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_10__["LaddaModule"]
            ],
            declarations: [
                _product_add_component__WEBPACK_IMPORTED_MODULE_7__["ProductAddComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ]
        })
    ], ProductAddModule);
    return ProductAddModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-add-product-add-module.js.map