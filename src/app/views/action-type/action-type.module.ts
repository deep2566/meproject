import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Collection
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


import { ActionTypeRoutingModule } from './action-type-routing.module';
import { ActionTypeComponent } from './action-type.component';
import { ToasterModule } from 'angular2-toaster';
import { ActionAddComponent } from './action-add/action-add.component';


@NgModule({
  declarations: [
    ActionTypeComponent,
    DataFilterPipe,
    ActionAddComponent
  ],
  imports: [
    CommonModule,
    ActionTypeRoutingModule,
    ToasterModule ,
    DataTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ]
})
export class ActionTypeModule { }
