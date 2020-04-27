import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Collector
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule } from '@angular/forms';

import { CollectorComponent } from './collector.component';

// Routing
import { CollectorRoutingModule } from './collector-routing.module';
import { CollectorAddComponent } from './collector-add/collector-add.component';
import { CollectorAddModule } from './collector-add/collector-add.module';
import { CollectorEditComponent } from './collector-edit/collector-edit.component';
import { CollectorEditModule } from './collector-edit/collector-edit.module';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { TokenInterceptor } from '../../token.interceptor';
//
@NgModule({
  imports: [
    CollectorRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    CollectorAddModule,
    CollectorEditModule,
    ToasterModule,
    LaddaModule
  ],
  declarations: [
    CollectorComponent,
    DataFilterPipe
  ],  
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class CollectorModule { }
