(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-collector-collector-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector-add/collector-add.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector-add/collector-add.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Add New Collector\n\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n          <div class=\"card-body col-md-8\">\n            <form [formGroup]=\"angForm\" novalidate>\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"col-form-label\">Name</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"name\" \n                  #name />\n              </div>\n              <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['name'].errors.required\">\n                  Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Email</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"email\" \n                  #email />\n              </div>\n              <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['email'].errors.required\">\n                  Email field is required.\n                </div>\n                <div *ngIf=\"angForm.controls['email'].errors.email\">\n                  Please enter valid email address.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Username</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"username\" \n                  #username />\n              </div>\n              <div *ngIf=\"angForm.controls['username'].invalid && (angForm.controls['username'].dirty || angForm.controls['username'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['username'].errors.required\">\n                  Username field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Password</label>\n                <input type=\"password\" class=\"form-control\" \n                  formControlName=\"password\" \n                  #password />\n              </div>\n              <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['password'].errors.required\">\n                  Password field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">ID Number</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"id_number\" \n                  #id_number />\n              </div>\n              <div *ngIf=\"angForm.controls['id_number'].invalid && (angForm.controls['id_number'].dirty || angForm.controls['id_number'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['id_number'].errors.required\">\n                  Id Number field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Start Date</label>\n                <input \n                #dp=\"bsDatepicker\"\n                [(bsValue)]=\"newVar\" value=\"{{ newVar | date:'yyyy-MM-dd' }}\"\n                bsDatepicker  type=\"text\" class=\"form-control\" \n                  formControlName=\"start_date\" \n                  #start_date />\n              </div>\n              <div *ngIf=\"angForm.controls['start_date'].invalid && (angForm.controls['start_date'].dirty || angForm.controls['start_date'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['start_date'].errors.required\">\n                  Start Date field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Date of Birth</label>\n                <input \n                #dp=\"bsDatepicker\"\n                [(bsValue)]=\"newVar2\" value=\"{{ newVar2 | date:'yyyy-MM-dd' }}\"\n                bsDatepicker  type=\"text\" class=\"form-control\" \n                  formControlName=\"dob\" \n                  #dob />\n              </div>\n              <div *ngIf=\"angForm.controls['dob'].invalid && (angForm.controls['dob'].dirty || angForm.controls['dob'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['dob'].errors.required\">\n                  Date of Birth field is required.\n                </div>\n              </div>\n\n              <!-- <div class=\"row\">\n                <div class=\"col-xs-12 col-12 col-md-6 form-group\">\n                  <input type=\"text\"\n                  class=\"form-control\"\n                  [minDate]=\"minDate\"\n                  [maxDate]=\"maxDate\"\n                  #dp=\"bsDatepicker\"\n                  bsDatepicker [(bsValue)]=\"bsValue\">\n                </div>\n              </div> -->\n\n              <div class=\"form-group\">\n                  <button [ladda]='loading' (click) = \"add(name.value,email.value,password.value,id_number.value,start_date.value,dob.value,username.value)\" type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Submit\n                  </button>\n                  <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector-edit/collector-edit.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector-edit/collector-edit.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Collector Edit\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n          <div class=\"card-body\">\n            <form [formGroup]=\"angForm\" novalidate>\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"col-form-label\">Name</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"name\" \n                  [(ngModel)] = \"collector.name\"\n                  #name />\n              </div>\n              <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['name'].errors.required\">\n                  Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Email</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"email\" \n                  [(ngModel)] = \"collector.email\"\n                  #email />\n              </div>\n              <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['email'].errors.required\">\n                  Email field is required.\n                </div>\n                <div *ngIf=\"angForm.controls['email'].errors.email\">\n                  Please enter valid email address.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">ID Number</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"id_number\" \n                  [(ngModel)] = \"collector.id_number\"\n                  #id_number />\n              </div>\n              <div *ngIf=\"angForm.controls['id_number'].invalid && (angForm.controls['id_number'].dirty || angForm.controls['id_number'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['id_number'].errors.required\">\n                  Id Number field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Start Date</label>\n                <input \n                #dp=\"bsDatepicker\"\n                 value=\"{{ collector.start_date | date:'yyyy-MM-dd' }}\"\n                bsDatepicker  type=\"text\" class=\"form-control\" \n                  formControlName=\"start_date\" \n                  [(ngModel)] = \"collector.start_date\"\n                  #start_date />\n              </div>\n              <div *ngIf=\"angForm.controls['start_date'].invalid && (angForm.controls['start_date'].dirty || angForm.controls['start_date'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['start_date'].errors.required\">\n                  Start Date field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Date of Birth</label>\n                <input \n                #dp=\"bsDatepicker\"\n                value=\"{{ collector.dob | date:'yyyy-MM-dd' }}\"\n                bsDatepicker  type=\"text\" class=\"form-control\" \n                  formControlName=\"dob\" \n                  [(ngModel)] = \"collector.dob\"\n                  #dob />\n              </div>\n              <div *ngIf=\"angForm.controls['dob'].invalid && (angForm.controls['dob'].dirty || angForm.controls['dob'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['dob'].errors.required\">\n                  Date of Birth field is required.\n                </div>\n              </div>\n\n              <!-- <div class=\"row\">\n                <div class=\"col-xs-12 col-12 col-md-6 form-group\">\n                  <input type=\"text\"\n                  class=\"form-control\"\n                  [minDate]=\"minDate\"\n                  [maxDate]=\"maxDate\"\n                  #dp=\"bsDatepicker\"\n                  bsDatepicker [(bsValue)]=\"bsValue\">\n                </div>\n              </div> -->\n\n              <div class=\"form-group\">\n                  <button [ladda]='loading' (click) = \"update(name.value,email.value,id_number.value,start_date.value,dob.value)\" type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Submit\n                  </button>\n                  <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> Collectors\n      <div class=\"card-header-actions\">\n        <button class=\"btn btn-primary btn-sm active\" [routerLink]=\"['create']\">\n          Add\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row mb-3\" *ngIf=\"!showSpinnner\">\n        <div class=\"col-md-4 offset-md-8\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by name\"/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"sk-wave\" *ngIf=\"showSpinnner\" >\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n\n      <table *ngIf=\"!showSpinnner\" class=\"table table-bordered table-hover table-responsive-lg\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n        <thead>\n          <tr>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\n            </th>\n            <!-- <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"id_copy\">ID Copy</mfDefaultSorter>\n            </th> -->\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"dob\">Date of Birth</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"id_number\">ID No.</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"start_date\">Start Date</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"city\">Action</mfDefaultSorter>\n            </th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\" (click)=\"enableField(item.id)\">\n            <td >{{item.name}}</td>\n            <td>{{item.email}}</td>\n            <!-- <td class=\"text-left\"></td> -->\n            <td>{{item.dob}}</td>\n            <td>{{ item.id_number}}</td>\n            <td>{{ item.start_date}}</td>\n            <td>\n              <a [routerLink]=\"['edit', item.id]\" class=\"btn btn-sm btn-primary active\">Edit</a>\n            </td>\n          </tr>\n        </tbody>\n        <tfoot>\n          <tr>\n            <td colspan=\"8\">\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n      <!-- <div>{{fields|json}}</div> -->\n      <form (ngSubmit)=\"onSubmit()\" ngNativeValidate>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Collector Fee: \n            <div class=\"card-header-actions\">\n              <button [disabled]=\"isDisable\" [ladda]='feeSaveloader' type=\"submit\" class=\"btn btn-pill btn-block btn-primary active\">\n                Save\n              </button>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <table class=\"table table-bordered\"  *ngIf=\"!showChildSpinnner\">\n              <thead>\n                <tr>\n                  <th>Start amount</th>\n                  <th>End amount</th>\n                  <th>Comission(%)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of fields; let index = index\">\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\" [ngModelOptions]=\"{standalone: true}\"\n                    [(ngModel)]=\"fields[index].start_percentage\" class=\"form-control\"/></td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"fields[index].end_percentage\" class=\"form-control\"/>\n                    </td>\n                  <td>\n                    <input [disabled]=\"isDisable\" required type=\"number\"\n                     [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"fields[index].comission\" class=\"form-control\"/>\n                    </td>\n                </tr>\n\n              </tbody>\n            </table>\n            <div class=\"sk-wave\" *ngIf=\"showChildSpinnner\" >\n              <div class=\"sk-rect sk-rect1\"></div>\n              <div class=\"sk-rect sk-rect2\"></div>\n              <div class=\"sk-rect sk-rect3\"></div>\n              <div class=\"sk-rect sk-rect4\"></div>\n              <div class=\"sk-rect sk-rect5\"></div>\n            </div>\n          </div>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/views/collector/collector-add/collector-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/collector/collector-add/collector-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: CollectorAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorAddComponent", function() { return CollectorAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _collector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collector.service */ "./src/app/views/collector/collector.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");






var CollectorAddComponent = /** @class */ (function () {
    function CollectorAddComponent(fb, alertService, router, ps) {
        this.fb = fb;
        this.alertService = alertService;
        this.router = router;
        this.ps = ps;
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
    CollectorAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            id_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CollectorAddComponent.prototype.add = function (name, email, password, id_number, start_date, dob, username) {
        var _this = this;
        console.log('sdfsdfsdfdsfsd');
        this.loading = true;
        this.ps.add(name, email, password, id_number, start_date, dob, username)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('Collector has been added successfully.', true);
            _this.router.navigate(['/collector']);
        });
    };
    CollectorAddComponent.prototype.ngOnInit = function () {
        console.log('asdfsadf');
    };
    CollectorAddComponent.prototype.back = function () {
        this.router.navigate(['/collector']);
    };
    CollectorAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _collector_service__WEBPACK_IMPORTED_MODULE_3__["CollectorService"] }
    ]; };
    CollectorAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collector-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector-add/collector-add.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss */ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/ng-select/ng-select.scss */ "./src/scss/vendors/ng-select/ng-select.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _collector_service__WEBPACK_IMPORTED_MODULE_3__["CollectorService"]])
    ], CollectorAddComponent);
    return CollectorAddComponent;
}());



/***/ }),

/***/ "./src/app/views/collector/collector-add/collector-add.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/collector/collector-add/collector-add.module.ts ***!
  \***********************************************************************/
/*! exports provided: CollectorAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorAddModule", function() { return CollectorAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _collector_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collector-add.component */ "./src/app/views/collector/collector-add/collector-add.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



// CollectorAdd



// Routing



//
var CollectorAddModule = /** @class */ (function () {
    function CollectorAddModule() {
    }
    CollectorAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
                _collector_add_component__WEBPACK_IMPORTED_MODULE_5__["CollectorAddComponent"]
            ]
        })
    ], CollectorAddModule);
    return CollectorAddModule;
}());



/***/ }),

/***/ "./src/app/views/collector/collector-edit/collector-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/collector/collector-edit/collector-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: CollectorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorEditComponent", function() { return CollectorEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _collector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collector.service */ "./src/app/views/collector/collector.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");






var CollectorEditComponent = /** @class */ (function () {
    function CollectorEditComponent(route, fb, alertService, router, ps) {
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
    CollectorEditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            id_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CollectorEditComponent.prototype.update = function (name, email, id_number, start_date, dob, id) {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.ps.update(name, email, id_number, start_date, dob, params.id)
                .subscribe(function (res) {
                _this.loading = false;
                _this.alertService.success('Collector has been updated successfully.', true);
                _this.router.navigate(['/collector']);
                _this.loading = true;
            });
        });
    };
    CollectorEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ps.edit(params['id']).subscribe(function (res) {
                _this.collector = res;
            });
        });
    };
    CollectorEditComponent.prototype.back = function () {
        this.router.navigate(['/collector']);
    };
    CollectorEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _collector_service__WEBPACK_IMPORTED_MODULE_3__["CollectorService"] }
    ]; };
    CollectorEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collector-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector-edit/collector-edit.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss */ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/ng-select/ng-select.scss */ "./src/scss/vendors/ng-select/ng-select.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _notifications_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _collector_service__WEBPACK_IMPORTED_MODULE_3__["CollectorService"]])
    ], CollectorEditComponent);
    return CollectorEditComponent;
}());



/***/ }),

/***/ "./src/app/views/collector/collector-edit/collector-edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/collector/collector-edit/collector-edit.module.ts ***!
  \*************************************************************************/
/*! exports provided: CollectorEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorEditModule", function() { return CollectorEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _collector_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collector-edit.component */ "./src/app/views/collector/collector-edit/collector-edit.component.ts");



// CollectorEdit


// Routing




//
var CollectorEditModule = /** @class */ (function () {
    function CollectorEditModule() {
    }
    CollectorEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
            declarations: [_collector_edit_component__WEBPACK_IMPORTED_MODULE_8__["CollectorEditComponent"]]
        })
    ], CollectorEditModule);
    return CollectorEditModule;
}());



/***/ }),

/***/ "./src/app/views/collector/collector-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/collector/collector-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CollectorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorRoutingModule", function() { return CollectorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collector.component */ "./src/app/views/collector/collector.component.ts");
/* harmony import */ var _collector_add_collector_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collector-add/collector-add.component */ "./src/app/views/collector/collector-add/collector-add.component.ts");
/* harmony import */ var _collector_edit_collector_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collector-edit/collector-edit.component */ "./src/app/views/collector/collector-edit/collector-edit.component.ts");






var routes = [
    {
        path: '',
        component: _collector_component__WEBPACK_IMPORTED_MODULE_3__["CollectorComponent"],
        data: {
            title: 'Collector'
        }
    },
    {
        path: 'create',
        component: _collector_add_collector_add_component__WEBPACK_IMPORTED_MODULE_4__["CollectorAddComponent"],
        data: {
            title: 'Collector Add'
        },
    },
    {
        path: 'edit/:id',
        component: _collector_edit_collector_edit_component__WEBPACK_IMPORTED_MODULE_5__["CollectorEditComponent"],
        data: {
            title: 'Collector Edit'
        },
    },
];
var CollectorRoutingModule = /** @class */ (function () {
    function CollectorRoutingModule() {
    }
    CollectorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CollectorRoutingModule);
    return CollectorRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/collector/collector.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/collector/collector.component.ts ***!
  \********************************************************/
/*! exports provided: CollectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorComponent", function() { return CollectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collector.service */ "./src/app/views/collector/collector.service.ts");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");




var CollectorComponent = /** @class */ (function () {
    function CollectorComponent(toasterService, CollectorService) {
        var _this = this;
        this.toasterService = toasterService;
        this.CollectorService = CollectorService;
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        /* fields:any =[
          {start_percentage:'',end_percentage:'',comission:''},
          {start_percentage:'',end_percentage:'',comission:''},
          {start_percentage:'',end_percentage:'',comission:''},
          {start_percentage:'',end_percentage:'',comission:''},
          {start_percentage:'',end_percentage:'',comission:''},
      
        ]; */
        this.fields = [
            { start_percentage: '', end_percentage: '', comission: '' }
        ];
        this.showSpinnner = true;
        this.filterQuery = '';
        this.isDisable = true;
        this.currentId = '';
        this.showChildSpinnner = false;
        this.feeSaveloader = false;
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        this.CollectorService.getData()
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
    CollectorComponent.prototype.toInt = function (num) {
        return +num;
    };
    CollectorComponent.prototype.getDate = function (regDate) {
        var date = new Date(regDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
    };
    CollectorComponent.prototype.enableField = function (id) {
        var _this = this;
        this.showChildSpinnner = true;
        this.currentId = id;
        this.isDisable = false;
        this.CollectorService.getFee(id)
            .subscribe(function (response) {
            _this.showChildSpinnner = false;
            console.log(response);
            _this.fields = response;
            /* if(response.length == 5){
              this.fields = response;
            }else{
              this.fields = [
                {start_percentage:'',end_percentage:'',comission:''},
                {start_percentage:'',end_percentage:'',comission:''},
                {start_percentage:'',end_percentage:'',comission:''},
                {start_percentage:'',end_percentage:'',comission:''},
                {start_percentage:'',end_percentage:'',comission:''},
            
              ];
            } */
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    };
    CollectorComponent.prototype.onSubmit = function () {
        var _this = this;
        this.feeSaveloader = true;
        this.CollectorService.updateFee(this.currentId, this.fields).subscribe(function (data) {
            _this.feeSaveloader = false;
            console.log(data);
            _this.toasterService.pop('success', 'Collector Fee', 'Collector Fee has been updated successfully.');
        });
        //window.alert(JSON.stringify(this.fields));
    };
    CollectorComponent.ctorParameters = function () { return [
        { type: angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"] },
        { type: _collector_service__WEBPACK_IMPORTED_MODULE_2__["CollectorService"] }
    ]; };
    CollectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collector/collector.component.html")).default,
            providers: [_collector_service__WEBPACK_IMPORTED_MODULE_2__["CollectorService"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../node_modules/ladda/dist/ladda-themeless.min.css */ "./node_modules/ladda/dist/ladda-themeless.min.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_3__["ToasterService"], _collector_service__WEBPACK_IMPORTED_MODULE_2__["CollectorService"]])
    ], CollectorComponent);
    return CollectorComponent;
}());



/***/ }),

/***/ "./src/app/views/collector/collector.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/collector/collector.module.ts ***!
  \*****************************************************/
/*! exports provided: CollectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorModule", function() { return CollectorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/views/collector/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _collector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collector.component */ "./src/app/views/collector/collector.component.ts");
/* harmony import */ var _collector_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collector-routing.module */ "./src/app/views/collector/collector-routing.module.ts");
/* harmony import */ var _collector_add_collector_add_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collector-add/collector-add.module */ "./src/app/views/collector/collector-add/collector-add.module.ts");
/* harmony import */ var _collector_edit_collector_edit_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collector-edit/collector-edit.module */ "./src/app/views/collector/collector-edit/collector-edit.module.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../token.interceptor */ "./src/app/token.interceptor.ts");



// Collector





// Routing






//
var CollectorModule = /** @class */ (function () {
    function CollectorModule() {
    }
    CollectorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _collector_routing_module__WEBPACK_IMPORTED_MODULE_8__["CollectorRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _collector_add_collector_add_module__WEBPACK_IMPORTED_MODULE_9__["CollectorAddModule"],
                _collector_edit_collector_edit_module__WEBPACK_IMPORTED_MODULE_10__["CollectorEditModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterModule"],
                angular2_ladda__WEBPACK_IMPORTED_MODULE_12__["LaddaModule"]
            ],
            declarations: [
                _collector_component__WEBPACK_IMPORTED_MODULE_7__["CollectorComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                    multi: true
                }]
        })
    ], CollectorModule);
    return CollectorModule;
}());



/***/ }),

/***/ "./src/app/views/collector/collector.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/collector/collector.service.ts ***!
  \******************************************************/
/*! exports provided: CollectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectorService", function() { return CollectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






var CollectorService = /** @class */ (function () {
    function CollectorService(http) {
        this.http = http;
        this.uri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'collector';
        this.dataUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'collectors';
        this.collectorFeeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'collectorfee';
    }
    CollectorService.prototype.getData = function () {
        return this.http.get(this.dataUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError) // then handle the error
        );
    };
    CollectorService.prototype.getFee = function (id) {
        return this.http.get(this.collectorFeeUrl + "/" + id);
    };
    CollectorService.prototype.add = function (name, email, password, id_number, start_date, dob, username) {
        var obj = {
            name: name, email: email, password: password, id_number: id_number, start_date: start_date, dob: dob, username: username
        };
        return this.http.post(this.uri + "/add", obj);
    };
    CollectorService.prototype.edit = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    CollectorService.prototype.update = function (name, email, id_number, start_date, dob, id) {
        var obj = {
            name: name, email: email, id_number: id_number, start_date: start_date, dob: dob
        };
        return this
            .http
            .post(this.uri + "/update/" + id, obj);
    };
    CollectorService.prototype.delete = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    CollectorService.prototype.updateFee = function (id, fields) {
        console.log('check field');
        console.log(fields);
        return this
            .http
            .post(this.collectorFeeUrl + "/update/" + id, fields);
    };
    CollectorService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // console.error('An error occurred:', error.error.message);
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    CollectorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CollectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CollectorService);
    return CollectorService;
}());



/***/ }),

/***/ "./src/app/views/collector/datafilterpipe.ts":
/*!***************************************************!*\
  !*** ./src/app/views/collector/datafilterpipe.ts ***!
  \***************************************************/
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
//# sourceMappingURL=views-collector-collector-module.js.map