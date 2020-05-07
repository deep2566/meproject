import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ProductAdd
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ProductEditComponent } from './product-edit.component';

// Routing
import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { TranslateModule } from '@ngx-translate/core';
//
@NgModule({
  imports: [
    ProductEditRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    LaddaModule,
    TranslateModule
  ],
  declarations: [
    ProductEditComponent,
    DataFilterPipe
  ]
})
export class ProductEditModule { }
