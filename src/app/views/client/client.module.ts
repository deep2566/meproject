import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Client
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule } from '@angular/forms';

import { ClientComponent } from './client.component';

// Routing
import { ClientRoutingModule } from './client-routing.module';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { ClientAddModule } from './client-add/client-add.module';
import { ClientEditModule } from './client-edit/collector-edit.module';
import { TokenInterceptor } from '../../token.interceptor';
//
@NgModule({
  imports: [
    ClientRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    ToasterModule,
    LaddaModule,
    ClientAddModule,
    ClientEditModule
  ],
  declarations: [
    ClientComponent,
    DataFilterPipe
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class ClientModule { }
