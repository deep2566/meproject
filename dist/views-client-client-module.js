(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-client-client-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client-add/client-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client-add/client-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Add New Client\n\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n          <div class=\"card-body col-md-8\">\n            <form [formGroup]=\"angForm\" novalidate>\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"col-form-label\">Name</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"name\" \n                  #name />\n              </div>\n              <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['name'].errors.required\">\n                  Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Email</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"email\" \n                  #email />\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Username</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"username\" \n                  #username />\n              </div>\n              <div *ngIf=\"angForm.controls['username'].invalid && (angForm.controls['username'].dirty || angForm.controls['username'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['username'].errors.required\">\n                  Username field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Password</label>\n                <input type=\"password\" class=\"form-control\" \n                  formControlName=\"password\" \n                  #password />\n              </div>\n              <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['password'].errors.required\">\n                  Password field is required.\n                </div>\n              </div>\n\n              <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['email'].errors.required\">\n                  Email field is required.\n                </div>\n                <div *ngIf=\"angForm.controls['email'].errors.email\">\n                  Please enter valid email address.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Phone</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"phone\" \n                  #phone />\n              </div>\n              <div *ngIf=\"angForm.controls['phone'].invalid && (angForm.controls['phone'].dirty || angForm.controls['phone'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['phone'].errors.required\">\n                  Phone field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Address</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"address\" \n                  #address />\n              </div>\n              <div *ngIf=\"angForm.controls['address'].invalid && (angForm.controls['address'].dirty || angForm.controls['address'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['address'].errors.required\">\n                  Address field is required.\n                </div>\n              </div>\n\n              <!-- <div class=\"row\">\n                <div class=\"col-xs-12 col-12 col-md-6 form-group\">\n                  <input type=\"text\"\n                  class=\"form-control\"\n                  [minDate]=\"minDate\"\n                  [maxDate]=\"maxDate\"\n                  #dp=\"bsDatepicker\"\n                  bsDatepicker [(bsValue)]=\"bsValue\">\n                </div>\n              </div> -->\n\n              <div class=\"form-group\">\n                  <button [ladda]='loading' (click) = \"add(name.value,email.value,phone.value,address.value,username.value,password.value)\"  type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Submit\n                  </button>\n                  <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client-edit/client-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client-edit/client-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Client Edit\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n          <div class=\"card-body\">\n            <form [formGroup]=\"angForm\" novalidate>\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"col-form-label\">Name</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"name\" \n                  [(ngModel)] = \"collector.name\"\n                  #name />\n              </div>\n              <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['name'].errors.required\">\n                  Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Email</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"email\" \n                  [(ngModel)] = \"collector.email\"\n                  #email />\n              </div>\n              <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['email'].errors.required\">\n                  Email field is required.\n                </div>\n                <div *ngIf=\"angForm.controls['email'].errors.email\">\n                  Please enter valid email address.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Phone</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"phone\" \n                  [(ngModel)] = \"collector.phone\"\n                  #phone />\n              </div>\n              <div *ngIf=\"angForm.controls['phone'].invalid && (angForm.controls['phone'].dirty || angForm.controls['phone'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['phone'].errors.required\">\n                  Phone field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Address</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"address\" \n                  [(ngModel)] = \"collector.address\"\n                  #address />\n              </div>\n              <div *ngIf=\"angForm.controls['address'].invalid && (angForm.controls['address'].dirty || angForm.controls['address'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['address'].errors.required\">\n                  Address field is required.\n                </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                  <button [ladda]='loading' (click) = \"update(name.value,email.value,phone.value,address.value)\" type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Submit\n                  </button>\n                  <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container> \n<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> Clients\n      <div class=\"card-header-actions\">\n        <button class=\"btn btn-primary btn-sm active\" [routerLink]=\"['create']\">\n          Add\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row mb-3\" *ngIf=\"!showSpinnner\">\n        <div class=\"col-md-4 offset-md-8\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by name\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"sk-wave\" *ngIf=\"showSpinnner\" >\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n\n      <table *ngIf=\"!showSpinnner\" class=\"table table-bordered table-striped table-hover table-responsive-lg\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n        <thead>\n          <tr>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"phone\">Phone</mfDefaultSorter>\n            </th>\n            <th style=\"width: 40%\">\n              <mfDefaultSorter by=\"address\">Address</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"id_no\">Action</mfDefaultSorter>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\" (click)=\"enableField(item.id)\">\n            <td>{{item.name}}</td>\n            <td>{{item.email}}</td>\n            <td>{{item.phone}}</td>\n            <td>{{ item.address}}</td>\n            <td><a [routerLink]=\"['edit', item.id]\" class=\"btn btn-sm btn-primary active\">Edit</a></td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"5\">\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n\n      <form (ngSubmit)=\"onSubmit()\" ngNativeValidate>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Client Fee: \n            <div class=\"card-header-actions\">\n              <button [disabled]=\"isDisable\" [ladda]='feeSaveloader' type=\"submit\" class=\"btn btn-pill btn-block btn-primary active\">\n                Save\n              </button>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-bordered\"  *ngIf=\"!showChildSpinnner\">\n              <thead>\n                <tr>\n                  <th>Start Amount</th>\n                  <th>End Amount</th>\n                  <th>Percentage(Without Legal:With Doc)</th>\n                  <th>Percentage(Without Legal:Without Doc)</th>\n                  <th>Percentage(With Legal:With Doc)</th>\n                  <th>Percentage(With Legal:Without Doc)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of fields; let index = index\" >\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\" [ngModelOptions]=\"{standalone: true}\"\n                    [(ngModel)]=\"fields[index].start_amount\" class=\"form-control\"/></td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"fields[index].end_amount\" class=\"form-control\"/>\n                    </td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"fields[index].percentage_with_doc_without_legal\" class=\"form-control\"/>\n                  </td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"fields[index].percentage_without_doc_without_legal\" class=\"form-control\"/>\n                  </td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"fields[index].percentage_with_legal_with_doc\" class=\"form-control\"/>\n                  </td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"fields[index].percentage_with_legal_without_doc\" class=\"form-control\"/>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n            <div class=\"sk-wave\" *ngIf=\"showChildSpinnner\" >\n              <div class=\"sk-rect sk-rect1\"></div>\n              <div class=\"sk-rect sk-rect2\"></div>\n              <div class=\"sk-rect sk-rect3\"></div>\n              <div class=\"sk-rect sk-rect4\"></div>\n              <div class=\"sk-rect sk-rect5\"></div>\n            </div>\n          </div>\n        </div>\n      </form>\n\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/client/client-add/client-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/client/client-add/client-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAddComponent", function() { return ClientAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client.service */ "./src/app/views/client/client.service.ts");






var ClientAddComponent = /** @class */ (function () {
    function ClientAddComponent(fb, ps, alertService, router) {
        this.fb = fb;
        this.ps = ps;
        this.alertService = alertService;
        this.router = router;
        this.fields = [
            { start_percentage: '', end_percentage: '', comission: '' },
            { start_percentage: '', end_percentage: '', comission: '' },
            { start_percentage: '', end_percentage: '', comission: '' },
            { start_percentage: '', end_percentage: '', comission: '' },
            { start_percentage: '', end_percentage: '', comission: '' },
        ];
        this.loading = false;
        // Datepicker
        this.bsValue = new Date();
        this.bsValue2 = new Date();
        this.createForm();
    }
    ClientAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ClientAddComponent.prototype.add = function (name, email, phone, address, username, password) {
        var _this = this;
        console.log('add call in component');
        this.loading = true;
        this.ps.add(name, email, phone, address, username, password)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('Client has been added successfully.', true);
            _this.router.navigate(['/clients']);
        });
    };
    ClientAddComponent.prototype.ngOnInit = function () {
        console.log('asdfsadf');
    };
    ClientAddComponent.prototype.back = function () {
        this.router.navigate(['/clients']);
    };
    ClientAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] },
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ClientAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./client-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client-add/client-add.component.html")).default,
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss */ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/ng-select/ng-select.scss */ "./src/scss/vendors/ng-select/ng-select.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"],
            _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientAddComponent);
    return ClientAddComponent;
}());



/***/ }),

/***/ "./src/app/views/client/client-add/client-add.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/client/client-add/client-add.module.ts ***!
  \**************************************************************/
/*! exports provided: ClientAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAddModule", function() { return ClientAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-add.component */ "./src/app/views/client/client-add/client-add.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



// CollectorAdd



// Routing



//
var ClientAddModule = /** @class */ (function () {
    function ClientAddModule() {
    }
    ClientAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_6__["ToasterModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_7__["LaddaModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()
            ],
            declarations: [
                _client_add_component__WEBPACK_IMPORTED_MODULE_5__["ClientAddComponent"]
            ]
        })
    ], ClientAddModule);
    return ClientAddModule;
}());



/***/ }),

/***/ "./src/app/views/client/client-edit/client-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/client/client-edit/client-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClientEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditComponent", function() { return ClientEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");






var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(route, fb, alertService, router, ps) {
        this.route = route;
        this.fb = fb;
        this.alertService = alertService;
        this.router = router;
        this.ps = ps;
        this.loading = false;
        // Datepicker
        this.bsValue = new Date();
        this.bsValue2 = new Date();
        this.collector = {};
        this.createForm();
    }
    ClientEditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ClientEditComponent.prototype.update = function (name, email, phone, address, id) {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.ps.update(name, email, phone, address, params.id)
                .subscribe(function (res) {
                _this.loading = false;
                _this.alertService.success('Client has been updated successfully.', true);
                _this.router.navigate(['/clients']);
                _this.loading = true;
            });
        });
    };
    ClientEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ps.edit(params['id']).subscribe(function (res) {
                _this.collector = res;
            });
        });
    };
    ClientEditComponent.prototype.back = function () {
        this.router.navigate(['/clients']);
    };
    ClientEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"] }
    ]; };
    ClientEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./client-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client-edit/client-edit.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss */ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/ng-select/ng-select.scss */ "./src/scss/vendors/ng-select/ng-select.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "./src/app/views/client/client-edit/collector-edit.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/client/client-edit/collector-edit.module.ts ***!
  \*******************************************************************/
/*! exports provided: ClientEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientEditModule", function() { return ClientEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _client_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-edit.component */ "./src/app/views/client/client-edit/client-edit.component.ts");



// ClientEdit


// Routing




//
var ClientEditModule = /** @class */ (function () {
    function ClientEditModule() {
    }
    ClientEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_5__["ToasterModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_6__["LaddaModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot()
            ],
            declarations: [_client_edit_component__WEBPACK_IMPORTED_MODULE_8__["ClientEditComponent"]]
        })
    ], ClientEditModule);
    return ClientEditModule;
}());



/***/ }),

/***/ "./src/app/views/client/client-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/client/client-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "./src/app/views/client/client.component.ts");
/* harmony import */ var _client_add_client_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-add/client-add.component */ "./src/app/views/client/client-add/client-add.component.ts");
/* harmony import */ var _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-edit/client-edit.component */ "./src/app/views/client/client-edit/client-edit.component.ts");






var routes = [
    {
        path: '',
        component: _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"],
        data: {
            title: 'Client'
        }
    },
    {
        path: 'create',
        component: _client_add_client_add_component__WEBPACK_IMPORTED_MODULE_4__["ClientAddComponent"],
        data: {
            title: 'Client Add'
        },
    },
    {
        path: 'edit/:id',
        component: _client_edit_client_edit_component__WEBPACK_IMPORTED_MODULE_5__["ClientEditComponent"],
        data: {
            title: 'Client Edit'
        },
    },
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/client/client.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.service */ "./src/app/views/client/client.service.ts");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");




var ClientComponent = /** @class */ (function () {
    function ClientComponent(toasterService, ClientService) {
        var _this = this;
        this.toasterService = toasterService;
        this.ClientService = ClientService;
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.filterQuery = '';
        this.isDisable = true;
        this.currentId = '';
        this.showChildSpinnner = false;
        this.showSpinnner = false;
        this.feeSaveloader = false;
        this.fields = [
            { start_amount: '', end_amount: '', percentage_with_doc_without_legal: '', percentage_without_doc_without_legal: '', percentage_with_legal_with_doc: '', percentage_with_legal_without_doc: '' },
            { start_amount: '', end_amount: '', percentage_with_doc_without_legal: '', percentage_without_doc_without_legal: '', percentage_with_legal_with_doc: '', percentage_with_legal_without_doc: '' },
            { start_amount: '', end_amount: '', percentage_with_doc_without_legal: '', percentage_without_doc_without_legal: '', percentage_with_legal_with_doc: '', percentage_with_legal_without_doc: '' }
        ];
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        this.showSpinnner = true;
        this.ClientService.getData()
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
    ClientComponent.prototype.toInt = function (num) {
        return +num;
    };
    ClientComponent.prototype.getDate = function (regDate) {
        var date = new Date(regDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
    };
    ClientComponent.prototype.enableField = function (id) {
        var _this = this;
        console.log('sdf');
        this.showChildSpinnner = true;
        this.currentId = id;
        this.isDisable = false;
        this.ClientService.getFee(id)
            .subscribe(function (response) {
            _this.showChildSpinnner = false;
            console.log(response);
            if (response.length == 3) {
                _this.fields = response;
            }
            else {
                _this.fields = [
                    { start_amount: '', end_amount: '', percentage_with_doc_without_legal: '', percentage_without_doc_without_legal: '', percentage_with_legal_with_doc: '', percentage_with_legal_without_doc: '' },
                    { start_amount: '', end_amount: '', percentage_with_doc_without_legal: '', percentage_without_doc_without_legal: '', percentage_with_legal_with_doc: '', percentage_with_legal_without_doc: '' },
                    { start_amount: '', end_amount: '', percentage_with_doc_without_legal: '', percentage_without_doc_without_legal: '', percentage_with_legal_with_doc: '', percentage_with_legal_without_doc: '' }
                ];
            }
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    };
    ClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.feeSaveloader = true;
        this.ClientService.updateFee(this.currentId, this.fields).subscribe(function (data) {
            _this.feeSaveloader = false;
            console.log(data);
            _this.toasterService.pop('success', 'Client Fee', 'Client Fee has been updated successfully.');
        });
        //window.alert(JSON.stringify(this.fields));
    };
    ClientComponent.ctorParameters = function () { return [
        { type: angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"] }
    ]; };
    ClientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/client/client.component.html")).default,
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../node_modules/ladda/dist/ladda-themeless.min.css */ "./node_modules/ladda/dist/ladda-themeless.min.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], _client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/views/client/client.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/client/client.module.ts ***!
  \***********************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/views/client/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client.component */ "./src/app/views/client/client.component.ts");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/views/client/client-routing.module.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var _client_add_client_add_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-add/client-add.module */ "./src/app/views/client/client-add/client-add.module.ts");
/* harmony import */ var _client_edit_collector_edit_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client-edit/collector-edit.module */ "./src/app/views/client/client-edit/collector-edit.module.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../token.interceptor */ "./src/app/token.interceptor.ts");



// Client





// Routing






//
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _client_routing_module__WEBPACK_IMPORTED_MODULE_8__["ClientRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_9__["ToasterModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_10__["LaddaModule"],
                _client_add_client_add_module__WEBPACK_IMPORTED_MODULE_11__["ClientAddModule"],
                _client_edit_collector_edit_module__WEBPACK_IMPORTED_MODULE_12__["ClientEditModule"]
            ],
            declarations: [
                _client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                }]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/views/client/client.service.ts":
/*!************************************************!*\
  !*** ./src/app/views/client/client.service.ts ***!
  \************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'client';
        this.dataUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'clients';
        this.clientFeeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'clientfee';
    }
    ClientService.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    ClientService.prototype.getFee = function (id) {
        return this.http.get(this.clientFeeUrl + "/" + id);
    };
    ClientService.prototype.add = function (name, email, phone, address, username, password) {
        var obj = {
            name: name, email: email, phone: phone, address: address, username: username, password: password
        };
        console.log(obj);
        return this.http.post(this.uri + "/add", obj);
    };
    ClientService.prototype.edit = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    ClientService.prototype.update = function (name, email, phone, address, id) {
        var obj = {
            name: name, email: email, phone: phone, address: address
        };
        return this
            .http
            .post(this.uri + "/update/" + id, obj);
    };
    ClientService.prototype.delete = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    ClientService.prototype.updateFee = function (id, fields) {
        console.log('check field');
        console.log(fields);
        return this
            .http
            .post(this.clientFeeUrl + "/update/" + id, fields);
    };
    ClientService.prototype.handleError = function (error) {
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
    ClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ClientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/views/client/datafilterpipe.ts":
/*!************************************************!*\
  !*** ./src/app/views/client/datafilterpipe.ts ***!
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



/***/ })

}]);
//# sourceMappingURL=views-client-client-module.js.map