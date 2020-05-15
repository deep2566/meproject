import { Component,ViewEncapsulation } from '@angular/core';
import { TableData, DashboardService } from './dashboard.service';
import { environment } from '../../../environments/environment';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss','../../../../node_modules/ladda/dist/ladda-themeless.min.css'],
  providers: [ DashboardService,ToasterService ],
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent{
  public showChildSpinnner= false;
  public showSpinnner= false;
  error: any;
  public data: any;

  constructor(private toasterService: ToasterService,private DashboardService: DashboardService) {
    this.showSpinnner = true;
    this.DashboardService.getData()
      .subscribe(
        (data) => {
          setTimeout(() => {
            this.showSpinnner = false;
            console.log(data)
            this.data = data['collector'];
            }, 100);
        }, // success path
        error => this.error = error // error path
      );
  }

}
