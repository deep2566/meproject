(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-edit-product-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-edit/product-edit.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-edit/product-edit.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> User Edit\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n\n        <div class=\"card-body\">\n        <form [formGroup]=\"angForm\" novalidate>\n          \n          <div class=\"form-group\">\n            <label class=\"\">Name</label>\n            <input type=\"text\" class=\"form-control\" \n              formControlName=\"name\" \n              #name \n              [(ngModel)] = \"user.name\"/>\n          </div>\n          <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['name'].errors.required\">\n              Name field is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"\">Username</label>\n            <input type=\"text\" disabled=\"true\" class=\"form-control\" \n              formControlName=\"username\" \n              #username \n              [(ngModel)] = \"user.username\"/>\n          </div>\n          <div *ngIf=\"angForm.controls['username'].invalid && (angForm.controls['username'].dirty || angForm.controls['username'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['username'].errors.required\">\n              Username field is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"\">Email</label>\n            <input type=\"text\" disabled=\"true\" class=\"form-control\" \n              formControlName=\"email\" \n              #email \n              [(ngModel)] = \"user.email\"/>\n          </div>\n          <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['email'].errors.required\">\n              Email field is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Role</label>\n            <select [(ngModel)] = \"user.role\"  class=\"form-control\" \n            formControlName=\"role\" \n            #role >\n            <option value=\"{{item.id}}\" *ngFor=\"let item of roles\">{{ item.role_name}}</option>\n          </select>\n          </div>\n          <div *ngIf=\"angForm.controls['role'].invalid && (angForm.controls['role'].dirty || angForm.controls['role'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['role'].errors.required\">\n              Role field is required.\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <button [ladda]='loading' (click) = \"update(name.value,role.value)\" type=\"submit\" class=\"btn btn-primary\"\n            [disabled]=\"angForm.invalid\" >\n              Submit\n            </button>\n            <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n          </div>\n\n        </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/product-edit/datafilterpipe.ts":
/*!************************************************!*\
  !*** ./src/app/product-edit/datafilterpipe.ts ***!
  \************************************************/
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

/***/ "./src/app/product-edit/product-edit-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/product-edit/product-edit-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditRoutingModule", function() { return ProductEditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/product-edit/product-edit.component.ts");




var routes = [
    {
        path: '',
        component: _product_edit_component__WEBPACK_IMPORTED_MODULE_3__["ProductEditComponent"],
        data: {
            title: 'Products'
        }
    }
];
var ProductEditRoutingModule = /** @class */ (function () {
    function ProductEditRoutingModule() {
    }
    ProductEditRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductEditRoutingModule);
    return ProductEditRoutingModule;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZWRpdC9wcm9kdWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/product-edit/product-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-edit/product-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _views_notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");







var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(route, alertService, router, ps, fb, toasterService) {
        var _this = this;
        this.route = route;
        this.alertService = alertService;
        this.router = router;
        this.ps = ps;
        this.fb = fb;
        this.toasterService = toasterService;
        this.loading = false;
        this.roles = {};
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.user = {};
        this.createForm();
        this.toasterService = toasterService;
        role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
        this.ps.getRoles()
            .subscribe(function (data) {
            _this.roles = data;
        });
    }
    ProductEditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [''],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ProductEditComponent.prototype.update = function (name, role, id) {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.ps.updateProduct(name, role, params.id)
                .subscribe(function (res) {
                _this.loading = false;
                _this.alertService.success('User has been updated successfully.', true);
                _this.router.navigate(['/users']);
                _this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
                _this.loading = true;
            });
        });
    };
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ps.editProduct(params['id']).subscribe(function (res) {
                _this.user = res;
            });
        });
    };
    ProductEditComponent.prototype.back = function () {
        this.router.navigate(['/users']);
    };
    ProductEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _views_notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"] }
    ]; };
    ProductEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-edit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-edit/product-edit.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product-edit/product-edit.component.css")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _views_notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product-edit/product-edit.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/product-edit/product-edit.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditModule", function() { return ProductEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/product-edit/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-edit.component */ "./src/app/product-edit/product-edit.component.ts");
/* harmony import */ var _product_edit_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-edit-routing.module */ "./src/app/product-edit/product-edit-routing.module.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");



// ProductAdd





// Routing



//
var ProductEditModule = /** @class */ (function () {
    function ProductEditModule() {
    }
    ProductEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _product_edit_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProductEditRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_10__["LaddaModule"]
            ],
            declarations: [
                _product_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProductEditComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ]
        })
    ], ProductEditModule);
    return ProductEditModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-edit-product-edit-module.js.map