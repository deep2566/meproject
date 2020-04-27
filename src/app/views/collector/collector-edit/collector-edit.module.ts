import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CollectorEdit
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// Routing
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { CollectorEditComponent } from './collector-edit.component'; 
//
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    LaddaModule,
    BsDatepickerModule.forRoot()
  ],
  declarations:[CollectorEditComponent]
})
export class CollectorEditModule { }
