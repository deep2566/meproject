import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ClientEdit
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

// Routing
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ClientEditComponent } from './client-edit.component'; 
import { TranslateModule } from '@ngx-translate/core';
//
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    LaddaModule,
    BsDatepickerModule.forRoot(),
    TranslateModule
  ],
  declarations:[ClientEditComponent]
})
export class ClientEditModule { }
