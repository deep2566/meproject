import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { ProductsService } from './products.service';
import { AlertComponent } from './views/notifications/alert.component';

// Loading Buttons
import { LaddaModule } from 'angular2-ladda';

import { LoadingButtonsComponent } from './views/buttons/loading-buttons/loading-buttons.component';
import { ToastrModule } from './views/notifications/toastr/toastr.module';
import { ToastrComponent } from './views/notifications/toastr/toastr.component';
import { LogoutComponent } from './logout/logout.component';
import { TokenInterceptor } from './token.interceptor';
import { ClientComissionComponent } from './views/client-comission/client-comission.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LaddaModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    LoadingButtonsComponent,
    LogoutComponent,
    InvoiceComponent
  ],
  providers: [{
    provide: LocationStrategy,      
    useClass: HashLocationStrategy
  },{
    provide: HTTP_INTERCEPTORS,   
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [ AppComponent ]

})
export class AppModule {}
