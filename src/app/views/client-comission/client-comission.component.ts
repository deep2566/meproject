import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { environment } from '../../../environments/environment';
import { ClientComissionService } from './client-comission.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, NgForm,ReactiveFormsModule } from '@angular/forms';
 
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

  @ViewChild('commentModal', {static: false}) public commentModal: ModalDirective;


  error: any;
  public data: any;
  public filterQuery = '';
  public item:any;
  public showSpinnner = true;
  public currentUser:any;
  public currentItem ={};

  form: FormGroup;
  commentaddForm: FormGroup;

  constructor(private ClientComissionService: ClientComissionService,public fb: FormBuilder,private toasterService: ToasterService) {
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

      this.commentaddForm = this.fb.group({
        comment: ['', Validators.required ]
      });

  }

  public reloadData(){
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

    this.commentaddForm = this.fb.group({
      comment: ['', Validators.required ]
    });
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

  addComment(data,invoiceId){
      this.ClientComissionService.addComment(data,invoiceId)
      .subscribe(data => {
        console.log('data', data);
      });
      this.commentaddForm.reset();
      this.commentModal.hide();
      //this.reloadData();
      this.toasterService.pop('success', 'Comment', 'Comment has been added successfully.');
    
  }  

  public setCurrentItem(currentItem) {
    this.currentItem = currentItem;
    console.log(currentItem);
  }

  deletePayment(id) {
    if(confirm('Are you sure want to delete this payment.?')){
      this.ClientComissionService.deletePayment(id)
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
