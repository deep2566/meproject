import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './datafilterpipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    TranslateModule,
    DataTableModule,
    CommonModule
  ],
  declarations: [ DashboardComponent,DataFilterPipe ],
  
})
export class DashboardModule { }
