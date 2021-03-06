import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// CollectorAdd
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ActionAddComponent } from './action-add.component';

// Routing
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { BsDatepickerModule } from 'ngx-bootstrap';
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
  declarations: [
    ActionAddComponent
  ]
})
export class ActionAddModule { }
