import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Collection
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFilterPipe } from './datafilterpipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollectionComponent } from './collection.component';

// Routing
import { CollectionRoutingModule } from './collection-routing.module';
import { TabsModule, ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { LaddaModule } from 'angular2-ladda';
import { ToasterModule } from 'angular2-toaster';
import { CollectionAddModule } from './collection-add/collection-add.module';
import { CollectionEditModule } from './collection-edit/collection-edit.module';
import { TokenInterceptor } from '../../token.interceptor';
//
@NgModule({
  imports: [
    CollectionRoutingModule,
    CommonModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    TabsModule,
    ModalModule.forRoot(),
    LaddaModule,
    ToasterModule,
    ReactiveFormsModule,
    CollectionAddModule,
    CollectionEditModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    CollectionComponent,
    DataFilterPipe
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }]
})
export class CollectionModule { }
