import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// ProductAdd
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// Routing
import { InvoiceRoutingModule } from './invoice-routing.module';
import { ToasterModule } from 'angular2-toaster';
import { ModalModule } from 'ngx-bootstrap';
import { LaddaModule } from 'angular2-ladda';
import { InvoiceComponent } from './invoice.component';
//


@NgModule({
  imports: [
    InvoiceRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    ModalModule.forRoot(),
    LaddaModule
  ],
  declarations: [
    InvoiceComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class InvoiceModule { }
