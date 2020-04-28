import { Component,ViewEncapsulation } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { environment } from '../../../environments/environment';
import { ClientComissionService } from './client-comission.service';

@Component({
  templateUrl: 'client-comission.component.html',
  providers: [ ToasterService,ClientComissionService ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss','../../../../node_modules/ladda/dist/ladda-themeless.min.css']
})
export class ClientComissionComponent {

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });


  error: any;
  public data: any;
  public filterQuery = '';
  public item:any;
  public showSpinnner = true;
  public currentUser:any;

  constructor(private ClientComissionService: ClientComissionService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      this.ClientComissionService.getData()
      .subscribe(
        (data) => {
          setTimeout(() => {
            this.showSpinnner =false;
            this.data = [...data];
            }, 100);
        }, // success path
        error => this.error = error // error path
      );
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public getDate(regDate: string) {
    const date = new Date(regDate);
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: '2-digit'});
  }

  downloadCollection(){
    window.location.href = environment.apiUrl+'download-client-comission';
  }

}
