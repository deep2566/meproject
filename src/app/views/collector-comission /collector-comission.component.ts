import { Component,ViewEncapsulation } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { environment } from '../../../environments/environment';
import { CollectorComissionService } from './collector-comission.service';

@Component({
  templateUrl: 'collector-comission.component.html',
  providers: [ ToasterService,CollectorComissionService ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss','../../../../node_modules/ladda/dist/ladda-themeless.min.css']
})
export class CollectorComissionComponent {

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


  constructor(private CollectorComissionService: CollectorComissionService,private toasterService: ToasterService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      this.CollectorComissionService.getData()
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
    window.location.href = environment.apiUrl+'download-collector-comission';
  }

  deletePayment(id) {
    if(confirm('Are you sure want to delete this payment.?')){
      this.CollectorComissionService.deletePayment(id)
      .subscribe(data => {
        for (let item  of this.data) {
            if (item.id == id) {
                this.data.splice(this.data.indexOf(item), 1);
            }      
        }
        this.toasterService.pop('success', 'Payment', 'Payment has been deleted successfully.');
      });
    }
  }



}
