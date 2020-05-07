import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// ProductAdd
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ProductGetComponent } from './product-get.component';


// Routing
import { ProductGetRoutingModule } from './product-get-routing.module';
import { ToasterModule } from 'angular2-toaster';
import { ModalModule } from 'ngx-bootstrap';
import { LaddaModule } from 'angular2-ladda';
//
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    ProductGetRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    ModalModule.forRoot(),
    LaddaModule,
    TranslateModule
  ],
  declarations: [
    ProductGetComponent,
    DataFilterPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class ProductGetModule { }
