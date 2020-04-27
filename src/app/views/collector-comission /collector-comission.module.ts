import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Collection
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { TabsModule, ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { LaddaModule } from 'angular2-ladda';
import { ToasterModule } from 'angular2-toaster';
import { TokenInterceptor } from '../../token.interceptor';
import { CollectorComissionComponent } from './collector-comission.component';
import { CollectorComissionRoutingModule } from './collector-comission-routing.module';
//
@NgModule({
  imports: [
    CollectorComissionRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    TabsModule,
    ModalModule.forRoot(),
    LaddaModule,
    ToasterModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    CollectorComissionComponent,
    DataFilterPipe
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class CollectorComissionModule { }
