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
import { ClientComissionComponent } from './client-comission.component';
import { ClientComissionRoutingModule } from './client-comission-routing.module';
//
@NgModule({
  imports: [
    ClientComissionRoutingModule,
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
    ClientComissionComponent,
    DataFilterPipe
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class ClientComissionModule { }
