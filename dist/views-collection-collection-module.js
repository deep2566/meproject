(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-collection-collection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection-add/collection-add.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection-add/collection-add.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Add New Collection\n\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n          <div class=\"card-body col-md-8\">\n            <form [formGroup]=\"angForm\" novalidate>\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Client Name</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"client_id\" \n                  #client_id >\n                  <option value=\"{{item.id}}\" *ngFor=\"let item of clients\">{{ item.name}}</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['client_id'].invalid && (angForm.controls['client_id'].dirty || angForm.controls['client_id'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['client_id'].errors.required\">\n                  Client Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Collector Name</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"collector_id\" \n                  #collector_id >\n                  <option value=\"{{item.id}}\" *ngFor=\"let item of collectors\">{{item.name}}</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['collector_id'].invalid && (angForm.controls['collector_id'].dirty || angForm.controls['collector_id'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['collector_id'].errors.required\">\n                  Collector Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"debtor_name\" class=\"col-form-label\">Debtor Name</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"debtor_name\" \n                  #debtor_name />\n              </div>\n              <div *ngIf=\"angForm.controls['debtor_name'].invalid && (angForm.controls['debtor_name'].dirty || angForm.controls['debtor_name'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['debtor_name'].errors.required\">\n                  Debtor Name field is required.\n                </div>\n              </div>\n\n              \n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\"> Debtor Email</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"debtor_email\" \n                  #debtor_email />\n              </div>\n              <div *ngIf=\"angForm.controls['debtor_email'].invalid && (angForm.controls['debtor_email'].dirty || angForm.controls['debtor_email'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['debtor_email'].errors.required\">\n                  Debtor Email field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Debtor Phone</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"debtor_phone\" \n                  #debtor_phone />\n              </div>\n              <div *ngIf=\"angForm.controls['debtor_phone'].invalid && (angForm.controls['debtor_phone'].dirty || angForm.controls['debtor_phone'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['debtor_phone'].errors.required\">\n                  Debtor Phone field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Supporting Documents:</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"is_provide_documents\" \n                  #is_provide_documents >\n                  <option value=\"\"></option>\n                  <option value=\"1\">Yes</option>\n                  <option value=\"0\">No</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['is_provide_documents'].invalid && (angForm.controls['is_provide_documents'].dirty || angForm.controls['is_provide_documents'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['is_provide_documents'].errors.required\">\n                  Supporting Document field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Supporting Legal Procedure</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"is_legal_procedure\" \n                  #is_legal_procedure >\n                  <option value=\"\"></option>\n                  <option value=\"1\">Yes</option>\n                  <option value=\"0\">No</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['is_legal_procedure'].invalid && (angForm.controls['is_legal_procedure'].dirty || angForm.controls['is_legal_procedure'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['is_legal_procedure'].errors.required\">\n                  Supporting Document field is required.\n                </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label for=\"amount\" class=\"col-form-label\">Amount</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"amount\" \n                  #amount />\n              </div>\n              <div *ngIf=\"angForm.controls['amount'].invalid && (angForm.controls['amount'].dirty || angForm.controls['amount'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['amount'].errors.required\">\n                  Amount field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Description</label>\n                <textarea rows=\"5\" class=\"form-control\" \n                  formControlName=\"description\" \n                  #description ></textarea>\n              </div>\n              <div *ngIf=\"angForm.controls['description'].invalid && (angForm.controls['description'].dirty || angForm.controls['description'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['description'].errors.required\">\n                  Description field is required.\n                </div>\n              </div>\n\n\n\n              <div class=\"form-group\">\n                  <button [ladda]='loading' (click) = \"add(angForm.value)\" type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Submit\n                  </button>\n                  <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection-edit/collection-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection-edit/collection-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"icon-note\"></i> Edit Collection\n\n          <div class=\"card-header-actions\">\n             <button (click)=\"back()\" class=\"btn btn-block btn-info btn-sm\">Back</button>\n          </div>\n        </div>\n          <div class=\"card-body col-md-8\">\n            <form [formGroup]=\"angForm\" novalidate>\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Client Name</label>\n                <select type=\"text\" class=\"form-control\" \n                  [(ngModel)] = \"collection.client_id\" \n                  formControlName=\"client_id\" \n                  #client_id >\n                  <option value=\"{{item.id}}\" *ngFor=\"let item of clients\">{{ item.name}}</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['client_id'].invalid && (angForm.controls['client_id'].dirty || angForm.controls['client_id'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['client_id'].errors.required\">\n                  Client Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Collector Name</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"collector_id\"\n                  [(ngModel)] = \"collection.collector_id\" \n                  #collector_id >\n                  <option value=\"{{item.id}}\" *ngFor=\"let item of collectors\">{{item.name}}</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['collector_id'].invalid && (angForm.controls['collector_id'].dirty || angForm.controls['collector_id'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['collector_id'].errors.required\">\n                  Collector Name field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"debtor_name\" class=\"col-form-label\">Debtor Name</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"debtor_name\"\n                  [(ngModel)] = \"collection.debtor_name\"  \n                  #debtor_name />\n              </div>\n              <div *ngIf=\"angForm.controls['debtor_name'].invalid && (angForm.controls['debtor_name'].dirty || angForm.controls['debtor_name'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['debtor_name'].errors.required\">\n                  Debtor Name field is required.\n                </div>\n              </div>\n\n              \n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\"> Debtor Email</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"debtor_email\"\n                  [(ngModel)] = \"collection.debtor_email\" \n                  #debtor_email />\n              </div>\n              <div *ngIf=\"angForm.controls['debtor_email'].invalid && (angForm.controls['debtor_email'].dirty || angForm.controls['debtor_email'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['debtor_email'].errors.required\">\n                  Debtor Email field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Debtor Phone</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"debtor_phone\"\n                  [(ngModel)] = \"collection.debtor_phone\" \n                  #debtor_phone />\n              </div>\n              <div *ngIf=\"angForm.controls['debtor_phone'].invalid && (angForm.controls['debtor_phone'].dirty || angForm.controls['debtor_phone'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['debtor_phone'].errors.required\">\n                  Debtor Phone field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Supporting Documents:</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"is_provide_documents\"\n                  [(ngModel)] = \"collection.is_provide_documents\" \n                  #is_provide_documents >\n                  <option value=\"\"></option>\n                  <option value=\"1\">Yes</option>\n                  <option value=\"0\">No</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['is_provide_documents'].invalid && (angForm.controls['is_provide_documents'].dirty || angForm.controls['is_provide_documents'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['is_provide_documents'].errors.required\">\n                  Supporting Document field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Supporting Legal Procedure</label>\n                <select type=\"text\" class=\"form-control\" \n                  formControlName=\"is_legal_procedure\" \n                  [(ngModel)] = \"collection.is_legal_procedure\"\n                  #is_legal_procedure >\n                  <option value=\"\"></option>\n                  <option value=\"1\">Yes</option>\n                  <option value=\"0\">No</option>\n                </select>\n              </div>\n              <div *ngIf=\"angForm.controls['is_legal_procedure'].invalid && (angForm.controls['is_legal_procedure'].dirty || angForm.controls['is_legal_procedure'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['is_legal_procedure'].errors.required\">\n                  Supporting Document field is required.\n                </div>\n              </div>\n\n\n              <div class=\"form-group\">\n                <label for=\"amount\" class=\"col-form-label\">Amount</label>\n                <input type=\"text\" class=\"form-control\" \n                  formControlName=\"amount\" \n                  [(ngModel)] = \"collection.amount\"\n                  #amount />\n              </div>\n              <div *ngIf=\"angForm.controls['amount'].invalid && (angForm.controls['amount'].dirty || angForm.controls['amount'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['amount'].errors.required\">\n                  Amount field is required.\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"col-form-label\">Description</label>\n                <textarea rows=\"5\" class=\"form-control\" \n                  formControlName=\"description\" \n                  [(ngModel)] = \"collection.description\"\n                  #description ></textarea>\n              </div>\n              <div *ngIf=\"angForm.controls['description'].invalid && (angForm.controls['description'].dirty || angForm.controls['description'].touched)\" class=\"alert alert-danger\">\n                <div *ngIf=\"angForm.controls['description'].errors.required\">\n                  Description field is required.\n                </div>\n              </div>\n\n\n\n              <div class=\"form-group\">\n                  <button [ladda]='loading' (click) = \"update(angForm.value,collection.id)\" type=\"submit\" class=\"btn btn-primary\"\n                  [disabled]=\"angForm.pristine || angForm.invalid\" >\n                  Submit\n                  </button>\n                  <button class=\"btn btn-danger\" type=\"reset\" >Reset</button>\n              </div>\n            </form>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<toaster-container [toasterconfig]=\"toasterconfig\"></toaster-container>\n<div class=\"animated fadeIn\" >\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <i class=\"fa fa-align-justify\"></i> Collections\n      <div class=\"card-header-actions\">\n      \n        <button *ngIf=\"currentUser.role==1\"  (click)=\"downloadCollection()\" class=\"btn btn-primary btn-sm active\">\n          <i  class=\"cui-cloud-download icons\"></i> Download\n        </button>\n        <button *ngIf=\"currentUser.role==1\" class=\"btn btn-primary btn-sm active\" [routerLink]=\"['create']\">\n          Add\n        </button>\n      </div>\n    </div>\n    \n    <div class=\"card-body\">\n      <div class=\"row mb-3\" *ngIf=\"!showSpinnner\">\n        <div class=\"col-md-4 offset-md-8\">\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by Collector Name\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"sk-wave\" *ngIf=\"showSpinnner\" >\n        <div class=\"sk-rect sk-rect1\"></div>\n        <div class=\"sk-rect sk-rect2\"></div>\n        <div class=\"sk-rect sk-rect3\"></div>\n        <div class=\"sk-rect sk-rect4\"></div>\n        <div class=\"sk-rect sk-rect5\"></div>\n      </div>\n      <table *ngIf=\"!showSpinnner\" class=\"table table-bordered table-hover table-responsive-lg\" [mfData]=\"data | dataFilter : filterQuery\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\n        <thead>\n          <tr>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"name\">Client Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"collector_name\">Collector Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"debtor_name\">Debtor Name</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\">\n              <mfDefaultSorter by=\"amount\">Amount</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"remaining_amount\">Remaining Amount</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"collected_amount\">Collected Amount</mfDefaultSorter>\n            </th>\n            <th style=\"width: 10%\">\n              <mfDefaultSorter by=\"description\">Description</mfDefaultSorter>\n            </th>\n            <th style=\"width: 20%\" *ngIf=\"currentUser.role==1\">\n              <mfDefaultSorter>Action</mfDefaultSorter>\n            </th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of mf.data\" (click)=\"setCurrentItem(item)\">\n            <td>{{item.client_detail.name}}</td>\n            <td>{{item.collector_detail.name}}</td>\n            <td>{{item.debtor_name}}</td>\n            <td>{{item.amount}}</td>\n            <td>{{item.amount - item.collected_amount }}</td>\n            <td>{{item.collected_amount}}</td>\n            <td>{{item.description}}</td>\n            <td *ngIf=\"currentUser.role==1\">\n              <div class=\"btn-group\" dropdown [autoClose]=\"true\">\n                <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n                  Action<span class=\"caret\"></span>\n                </button>\n                <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n                  <li role=\"menuitem\"><a class=\"dropdown-item\" [routerLink]=\"['edit', item.id]\">Edit</a></li>\n                  <li *ngIf=\"currentUser.role != 3\"><a  class=\"dropdown-item\" (click)=\"delete(item.id)\">Delete</a></li>\n                  <li role=\"menuitem\"><a  class=\"dropdown-item\" data-toggle=\"modal\" (click)=\"amountModal.show()\">Add Payment</a></li>\n                </ul>\n              </div>\n            </td>\n            \n          </tr>\n        </tbody>\n\n      </table>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"animated fadeIn\" >\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Collection Detail\n    </div>\n    <div class=\"card-body\"> \n      <div *ngIf=\"(currentItem | json) != ({} | json)\">\n\n        <tabset>\n          <tab heading=\"Debtor Information\">\n            <button *ngIf=\"currentUser.role==1\" type=\"button\" class=\"btn btn-primary mr-1 \" style=\"margin-bottom: 10px;\" data-toggle=\"modal\" (click)=\"primaryModal.show();phoneaddForm.reset()\">\n              Add Phone\n            </button>\n           \n            <table class=\"table table-bordered\">\n\n              <tbody>\n                <tr>\n                  <th>Debtor Name : </th>\n                  <td>{{ currentItem.debtor_name}}</td>\n                </tr>\n                <tr>\n                  <th>Debtor Email : </th>\n                  <td>{{ currentItem.debtor_email}}</td>\n                </tr>\n                <tr>\n                  <th>Debtor Phone:</th>\n                  <td>\n                    {{ currentItem.debtor_phone}}\n                    <i *ngFor=\"let item of currentItem.debt_phone\">\n                        , {{ item.phone}}\n                    </i>\n                  </td>\n                </tr>\n                <tr>\n                  <th>Amount Collect From Debtor:</th>\n                  <td>{{ currentItem.amount}}</td>\n                </tr>\n                <tr>\n                  <th>Supporting Documents:</th>\n                  <td>{{currentItem.is_provide_documents === 1 ? 'Yes' : 'No'}} </td>\n                </tr>\n                <tr>\n                  <th>Supporting Legal Procedure:</th>\n                  <td>{{ currentItem.is_legal_procedure === 1 ? 'Yes' : 'No'}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </tab>\n          <tab heading=\"Client Information\">\n            <table class=\"table table-bordered\">\n              <tbody>\n                <tr>\n                  <th width=\"30%\">Client Name : </th>\n                  <td>{{ currentItem.client_detail.name}}</td>\n                </tr>\n                <tr>\n                  <th>Client Email : </th>\n                  <td>{{ currentItem.client_detail.email}}</td>\n                </tr>\n                <tr>\n                  <th>Client Phone:</th>\n                  <td>{{ currentItem.client_detail.phone}}</td>\n                </tr>\n                <tr>\n                  <th>Client Address:</th>\n                  <td>{{ currentItem.client_detail.address}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </tab>\n          <tab heading=\"Actions\">\n            <button *ngIf=\"currentUser.role==1\" type=\"button\" class=\"btn btn-primary mr-1 \" style=\"margin-bottom: 10px;\" data-toggle=\"modal\" (click)=\"actionModal.show()\">\n              Add Action\n            </button>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>Level 1</th>\n                  <th>Level 2</th>\n                  <th>Level 3</th>\n                  <th>Notes</th>\n                  <th>Created At</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of currentItem.action_response\">\n                  <td>{{ item.level_one_detail.name}}</td>\n                  <td>{{ item.level_two_detail.name}}\t</td>\n                  <td>{{ item.level_three_detail.name}}</td>\n                  <td>{{ item.notes}}</td>\n                  <td>{{ item.created | date: 'MMM dd yyyy'}}</td>\n                </tr>\n              </tbody>\n            </table>\n          </tab>\n          <tab heading=\"Attachements\">\n            <button *ngIf=\"currentUser.role==1\" type=\"button\" class=\"btn btn-primary mr-1 \" style=\"margin-bottom: 10px;\" data-toggle=\"modal\" (click)=\"attachModal.show()\">\n              Add Attachment\n            </button>\n              <table class=\"table\">\n                <tbody>\n                  <tr *ngFor=\"let item of currentItem.attachment; let i = index\">\n                    <th>Attachment {{i+1}}:</th>\n                    <td><i (click)=\"download(item.id)\" class=\"cui-cloud-download icons font-2xl d-block mt-4\"></i>{{ item.file}}</td>\n                  </tr>\n                </tbody>\n              </table>\n          </tab>\n        </tabset> \n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <form [formGroup]=\"phoneaddForm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Phone No</h4>\n          <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-form-label\">Phone Number</label>\n              <input  formControlName=\"phone\"  type=\"number\" class=\"form-control\"  \n                #phone />\n            </div>\n            <div *ngIf=\"phoneaddForm.controls['phone'].invalid && (phoneaddForm.controls['phone'].dirty || phoneaddForm.controls['phone'].touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"phoneaddForm.controls['phone'].errors.required\">\n                Please enter Phone number.\n              </div>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide();\">Close</button>\n          <button [disabled]=\"phoneaddForm.pristine || phoneaddForm.invalid\" (click) = \"addPhone(phone.value,currentItem.id)\" type=\"submit\" [ladda]='savebuttonLoader' class=\"btn btn-primary\">Save</button>\n        </div>\n\n      </div>\n   </form>\n    \n   \n  </div>\n</div>\n\n<div bsModal #actionModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <form #actionaddForm=\"ngForm\" ngNativeValidate>\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add action </h4>\n          <button type=\"button\" class=\"close\" (click)=\"actionModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-form-label\">Level 1</label>\n              <select required [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" (change)=\"setOptionOne($event.target.value)\" [(ngModel)]=\"level_one\" #level1> \n                <option value=\"{{item.id}}\" *ngFor=\"let item of actions\">{{ item.name}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-form-label\">Level 2</label>\n              <select required [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" (change)=\"setOptionTwo($event.target.value)\" [(ngModel)]=\"level_two\" #level2>\n                <option value=\"{{item.id}}\" *ngFor=\"let item of actions\">{{ item.name}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-form-label\">Level 3</label>\n              <select required [ngModelOptions]=\"{standalone: true}\"  class=\"form-control\" (change)=\"setOptionThree($event.target.value)\" [(ngModel)]=\"level_three\" #level3>\n                <option value=\"{{item.id}}\" *ngFor=\"let item of actions\">{{ item.name}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-form-label\">Description</label>\n              <textarea required rows=\"5\" class=\"form-control\" #description></textarea>\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click(click)=\"actionModal.hide()\">Close</button>\n          <button [disabled]=\"false\" type=\"submit\" [ladda]='savebuttonLoader' (click) = \"addAction(level_one,level_two,level_three,description.value,currentItem.id)\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n\n      </div>\n   </form>\n    \n   \n  </div>\n</div>\n\n\n<div bsModal #attachModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitAttachment(currentItem.id)\" enctype=\"multipart/form-data\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Attach File</h4>\n          <button type=\"button\" class=\"close\" (click)=\"attachModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n              <label for=\"name\" class=\"col-form-label\">File</label>\n              <input  type=\"file\" class=\"form-control\" (change)=\"uploadFile($event)\" />\n            </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"attachModal.hide()\">Close</button>\n          <button [disabled]=\"false\" type=\"submit\"  class=\"btn btn-primary\">Save changes</button>\n        </div>\n\n      </div>\n    </form>\n    \n   \n  </div>\n</div>\n\n<div bsModal #amountModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\n    <form [formGroup]=\"amountaddForm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Amount</h4>\n          <button type=\"button\" class=\"close\" (click)=\"amountModal.hide()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"col-form-label\">Amount</label>\n            <input type=\"text\" class=\"form-control\" \n              formControlName=\"clamount\" \n              #clamount />\n          </div>\n          <div *ngIf=\"amountaddForm.controls['clamount'].invalid && (amountaddForm.controls['clamount'].dirty || amountaddForm.controls['clamount'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"amountaddForm.controls['clamount'].errors.required\">\n              Please enter Collected Amout\n            </div>\n          </div>\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"amountModal.hide()\">Close</button>\n          <button [disabled]=\"amountaddForm.pristine || amountaddForm.invalid\" type=\"submit\" [ladda]='savebuttonLoader' (click) = \"addAmount(amountaddForm.value,currentItem.id)\" class=\"btn btn-primary\">Add</button>\n        </div>\n\n      </div>\n   </form>\n    \n   \n  </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./src/app/views/collection/collection-add/collection-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/collection/collection-add/collection-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CollectionAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionAddComponent", function() { return CollectionAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collection.service */ "./src/app/views/collection/collection.service.ts");






var CollectionAddComponent = /** @class */ (function () {
    function CollectionAddComponent(fb, ps, alertService, router) {
        var _this = this;
        this.fb = fb;
        this.ps = ps;
        this.alertService = alertService;
        this.router = router;
        this.clients = {};
        this.collectors = {};
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
        this.ps.getClients()
            .subscribe(function (data) {
            _this.clients = data;
        });
        this.ps.getCollectors()
            .subscribe(function (data) {
            _this.collectors = data;
        });
    }
    CollectionAddComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            collector_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            debtor_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            debtor_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            debtor_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_provide_documents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_legal_procedure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CollectionAddComponent.prototype.add = function (data) {
        var _this = this;
        console.log(data);
        this.loading = true;
        this.ps.add(data)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('Collection has been added successfully.', true);
            _this.router.navigate(['/collections']);
        });
    };
    CollectionAddComponent.prototype.ngOnInit = function () {
        console.log('asdfsadf');
    };
    CollectionAddComponent.prototype.back = function () {
        this.router.navigate(['/collections']);
    };
    CollectionAddComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"] },
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CollectionAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collection-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection-add/collection-add.component.html")).default,
            providers: [_collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss */ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/ng-select/ng-select.scss */ "./src/scss/vendors/ng-select/ng-select.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"],
            _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CollectionAddComponent);
    return CollectionAddComponent;
}());



/***/ }),

/***/ "./src/app/views/collection/collection-add/collection-add.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/collection/collection-add/collection-add.module.ts ***!
  \**************************************************************************/
/*! exports provided: CollectionAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionAddModule", function() { return CollectionAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _collection_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-add.component */ "./src/app/views/collection/collection-add/collection-add.component.ts");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



// CollectorAdd



// Routing



//
var CollectionAddModule = /** @class */ (function () {
    function CollectionAddModule() {
    }
    CollectionAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
                _collection_add_component__WEBPACK_IMPORTED_MODULE_5__["CollectionAddComponent"]
            ]
        })
    ], CollectionAddModule);
    return CollectionAddModule;
}());



/***/ }),

/***/ "./src/app/views/collection/collection-edit/collection-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/collection/collection-edit/collection-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CollectionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionEditComponent", function() { return CollectionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../collection.service */ "./src/app/views/collection/collection.service.ts");






var CollectionEditComponent = /** @class */ (function () {
    function CollectionEditComponent(route, fb, ps, alertService, router) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.ps = ps;
        this.alertService = alertService;
        this.router = router;
        this.clients = {};
        this.collectors = {};
        this.collection = {};
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
        this.ps.getClients()
            .subscribe(function (data) {
            _this.clients = data;
        });
        this.ps.getCollectors()
            .subscribe(function (data) {
            _this.collectors = data;
        });
    }
    CollectionEditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            client_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            collector_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            debtor_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            debtor_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            debtor_phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_provide_documents: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_legal_procedure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CollectionEditComponent.prototype.update = function (data, id) {
        var _this = this;
        console.log(data);
        this.loading = true;
        this.ps.update(data, id)
            .subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('Collection has been updated successfully.', true);
            _this.router.navigate(['/collections']);
        });
    };
    CollectionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.ps.edit(params['id']).subscribe(function (res) {
                _this.collection = res;
            });
        });
    };
    CollectionEditComponent.prototype.back = function () {
        this.router.navigate(['/collections']);
    };
    CollectionEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"] },
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CollectionEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collection-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection-edit/collection-edit.component.html")).default,
            providers: [_collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss */ "./node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../scss/vendors/ng-select/ng-select.scss */ "./src/scss/vendors/ng-select/ng-select.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _collection_service__WEBPACK_IMPORTED_MODULE_5__["CollectionService"],
            _notifications_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CollectionEditComponent);
    return CollectionEditComponent;
}());



/***/ }),

/***/ "./src/app/views/collection/collection-edit/collection-edit.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/collection/collection-edit/collection-edit.module.ts ***!
  \****************************************************************************/
/*! exports provided: CollectionEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionEditModule", function() { return CollectionEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _collection_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection-edit.component */ "./src/app/views/collection/collection-edit/collection-edit.component.ts");



// CollectorAdd


// Routing




//
var CollectionEditModule = /** @class */ (function () {
    function CollectionEditModule() {
    }
    CollectionEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
            declarations: [
                _collection_edit_component__WEBPACK_IMPORTED_MODULE_8__["CollectionEditComponent"]
            ]
        })
    ], CollectionEditModule);
    return CollectionEditModule;
}());



/***/ }),

/***/ "./src/app/views/collection/collection-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/collection/collection-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CollectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionRoutingModule", function() { return CollectionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection.component */ "./src/app/views/collection/collection.component.ts");
/* harmony import */ var _collection_add_collection_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collection-add/collection-add.component */ "./src/app/views/collection/collection-add/collection-add.component.ts");
/* harmony import */ var _collection_edit_collection_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-edit/collection-edit.component */ "./src/app/views/collection/collection-edit/collection-edit.component.ts");






var routes = [
    {
        path: '',
        component: _collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"],
        data: {
            title: 'Collection'
        }
    },
    {
        path: 'create',
        component: _collection_add_collection_add_component__WEBPACK_IMPORTED_MODULE_4__["CollectionAddComponent"],
        data: {
            title: 'Collection Add'
        }
    },
    {
        path: 'edit/:id',
        component: _collection_edit_collection_edit_component__WEBPACK_IMPORTED_MODULE_5__["CollectionEditComponent"],
        data: {
            title: 'Collection Edit'
        }
    }
];
var CollectionRoutingModule = /** @class */ (function () {
    function CollectionRoutingModule() {
    }
    CollectionRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CollectionRoutingModule);
    return CollectionRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/collection/collection.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/collection/collection.component.ts ***!
  \**********************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection.service */ "./src/app/views/collection/collection.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-toaster/angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notifications_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../notifications/alert.service */ "./src/app/views/notifications/alert.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");









var CollectionComponent = /** @class */ (function () {
    function CollectionComponent(alertService, router, fb, toasterService, CollectionService) {
        var _this = this;
        this.alertService = alertService;
        this.router = router;
        this.fb = fb;
        this.toasterService = toasterService;
        this.CollectionService = CollectionService;
        this.toasterconfig = new angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterConfig"]({
            tapToDismiss: true,
            timeout: 5000
        });
        this.filterQuery = '';
        this.currentItem = {};
        this.disablePhone = true;
        this.savebuttonLoader = false;
        this.actions = {};
        this.level_one = '';
        this.level_two = '';
        this.level_three = '';
        this.showSpinnner = true;
        this.sortByWordLength = function (a) {
            return a.name.length;
        };
        this.CollectionService.getData()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.showSpinnner = false;
                _this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(data);
            }, 100);
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
        this.CollectionService.getAction()
            .subscribe(function (data) {
            _this.actions = data;
        });
        this.amountaddForm = this.fb.group({
            clamount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.form = this.fb.group({
            avatar: [null]
        });
        this.phoneaddForm = this.fb.group({
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CollectionComponent.prototype.toInt = function (num) {
        return +num;
    };
    CollectionComponent.prototype.getDate = function (regDate) {
        var date = new Date(regDate);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' });
    };
    CollectionComponent.prototype.setCurrentItem = function (currentItem) {
        this.currentItem = currentItem;
        console.log(currentItem);
    };
    CollectionComponent.prototype.checkPhoneValue = function (value) {
        if (value != '') {
            this.disablePhone = false;
        }
    };
    CollectionComponent.prototype.addPhone = function (phone, collection_id) {
        var _this = this;
        this.savebuttonLoader = true;
        this.CollectionService.addPhone(phone, collection_id)
            .subscribe(function (data) {
            _this.phoneaddForm.reset();
            _this.savebuttonLoader = false;
            _this.currentItem = data;
            _this.primaryModal.hide();
            _this.toasterService.pop('success', 'Phone', 'Phone Number has been added successfully.');
        });
    };
    CollectionComponent.prototype.setOptionOne = function (value) {
        this.level_one = value;
    };
    CollectionComponent.prototype.setOptionTwo = function (value) {
        this.level_two = value;
    };
    CollectionComponent.prototype.setOptionThree = function (value) {
        this.level_three = value;
    };
    CollectionComponent.prototype.download = function (id) {
        var _this = this;
        this.CollectionService.downloadAttach(id)
            .subscribe(function (data) {
            if (data) {
                window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + "collection/download-attachment/" + id;
            }
            else {
                _this.toasterService.pop('error', 'Attachment', 'File not exist.');
            }
        });
    };
    CollectionComponent.prototype.delete = function (id) {
        var _this = this;
        this.CollectionService.delete(id)
            .subscribe(function (data) {
            for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id == id) {
                    _this.data.splice(_this.data.indexOf(item), 1);
                }
            }
            _this.toasterService.pop('success', 'Collection', 'Collection has been deleted successfully.');
        });
    };
    CollectionComponent.prototype.addAction = function (level_one, level_two, level_three, notes, collection_id) {
        var _this = this;
        console.log('level one value get');
        console.log(level_one);
        if (level_one != '' && level_two != '' && level_three != '' && notes != '') {
            this.savebuttonLoader = true;
            this.CollectionService.addAction(level_one, level_two, level_three, notes, collection_id)
                .subscribe(function (data) {
                _this.savebuttonLoader = false;
                _this.currentItem = data;
                _this.actionModal.hide();
                _this.toasterService.pop('success', 'Action', 'Action has been added successfully.');
                // this.loading = false;
                // this.alertService.success('Collector has been added successfully.', true)
                // this.router.navigate(['/collector'])
            });
        }
    };
    CollectionComponent.prototype.uploadFile = function (event) {
        var file = event.target.files[0];
        this.form.patchValue({
            avatar: file
        });
        this.form.get('avatar').updateValueAndValidity();
    };
    CollectionComponent.prototype.submitAttachment = function (id) {
        var _this = this;
        console.log(this.form.value);
        var formData = new FormData();
        formData.append("collection_id", id);
        formData.append("avatar", this.form.get('avatar').value);
        this.CollectionService.addAttach(formData)
            .subscribe(function (data) {
            _this.savebuttonLoader = false;
            _this.currentItem = data;
            _this.attachModal.hide();
            _this.toasterService.pop('success', 'Attachment', 'Attachment has been added successfully.');
            // this.loading = false;
            // this.alertService.success('Collector has been added successfully.', true)
            // this.router.navigate(['/collector'])
        });
    };
    CollectionComponent.prototype.downloadCollection = function () {
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + 'download-collection';
    };
    CollectionComponent.prototype.getCollectionsData = function () {
        var _this = this;
        this.CollectionService.getData()
            .subscribe(function (data) {
            setTimeout(function () {
                _this.showSpinnner = false;
                _this.data = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(data);
            }, 100);
        }, // success path
        function (// success path
        error) { return _this.error = error; } // error path
        );
    };
    CollectionComponent.prototype.addAmount = function (data, id) {
        if (confirm('Are you sure to add ?')) {
            console.log(data);
            console.log('id', id);
            this.CollectionService.addDbtAmount({ 'id': id, 'clamount': data.clamount })
                .subscribe(function (data) {
                console.log('data', data);
            });
            this.amountaddForm.reset();
            this.amountModal.hide();
            this.getCollectionsData();
        }
    };
    CollectionComponent.ctorParameters = function () { return [
        { type: _notifications_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] },
        { type: _collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('primaryModal', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CollectionComponent.prototype, "primaryModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionModal', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CollectionComponent.prototype, "actionModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('attachModal', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CollectionComponent.prototype, "attachModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('amountModal', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], CollectionComponent.prototype, "amountModal", void 0);
    CollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/collection/collection.component.html")).default,
            providers: [_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../scss/vendors/toastr/toastr.scss */ "./src/scss/vendors/toastr/toastr.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../../node_modules/ladda/dist/ladda-themeless.min.css */ "./node_modules/ladda/dist/ladda-themeless.min.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_notifications_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], angular2_toaster_angular2_toaster__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], _collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"]])
    ], CollectionComponent);
    return CollectionComponent;
}());



/***/ }),

/***/ "./src/app/views/collection/collection.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/collection/collection.module.ts ***!
  \*******************************************************/
/*! exports provided: CollectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionModule", function() { return CollectionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-datatable */ "./node_modules/angular2-datatable/index.js");
/* harmony import */ var angular2_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datafilterpipe */ "./src/app/views/collection/datafilterpipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _collection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collection.component */ "./src/app/views/collection/collection.component.ts");
/* harmony import */ var _collection_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection-routing.module */ "./src/app/views/collection/collection-routing.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var angular2_ladda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-ladda */ "./node_modules/angular2-ladda/fesm5/angular2-ladda.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _collection_add_collection_add_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collection-add/collection-add.module */ "./src/app/views/collection/collection-add/collection-add.module.ts");
/* harmony import */ var _collection_edit_collection_edit_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collection-edit/collection-edit.module */ "./src/app/views/collection/collection-edit/collection-edit.module.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../token.interceptor */ "./src/app/token.interceptor.ts");



// Collection





// Routing







//
var CollectionModule = /** @class */ (function () {
    function CollectionModule() {
    }
    CollectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _collection_routing_module__WEBPACK_IMPORTED_MODULE_8__["CollectionRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular2_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["TabsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
                angular2_ladda__WEBPACK_IMPORTED_MODULE_10__["LaddaModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_11__["ToasterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _collection_add_collection_add_module__WEBPACK_IMPORTED_MODULE_12__["CollectionAddModule"],
                _collection_edit_collection_edit_module__WEBPACK_IMPORTED_MODULE_13__["CollectionEditModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot()
            ],
            declarations: [
                _collection_component__WEBPACK_IMPORTED_MODULE_7__["CollectionComponent"],
                _datafilterpipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptor"],
                    multi: true
                }]
        })
    ], CollectionModule);
    return CollectionModule;
}());



/***/ }),

/***/ "./src/app/views/collection/datafilterpipe.ts":
/*!****************************************************!*\
  !*** ./src/app/views/collection/datafilterpipe.ts ***!
  \****************************************************/
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
//# sourceMappingURL=views-collection-collection-module.js.map