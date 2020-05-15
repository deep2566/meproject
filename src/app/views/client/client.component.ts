import { Component,ViewEncapsulation,ViewChild } from '@angular/core';
import { TableData, ClientService } from './client.service';
import { environment } from '../../../environments/environment';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  templateUrl: 'client.component.html',
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss','../../../../node_modules/ladda/dist/ladda-themeless.min.css'],
  providers: [ ClientService,ToasterService ],
  encapsulation: ViewEncapsulation.None
})
export class ClientComponent {

  @ViewChild('dangerModal', {static: false}) public dangerModal: ModalDirective;

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });

  error: any;
  public data: TableData;
  public filterQuery = '';
  public isDisable = true;
  public currentId = '';
  public showChildSpinnner= false;
  public showSpinnner= false;
  public feeSaveloader = false;
  public currentItem:any;
  public isLoadingDelete =false;

  fields:any =[
    {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''},
    {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''},
    {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''}

  ];

  constructor(private toasterService: ToasterService,private ClientService: ClientService) {
    this.showSpinnner = true;
    this.ClientService.getData()
      .subscribe(
        (data: TableData) => {
          setTimeout(() => {
            this.showSpinnner = false;
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

  enableField(id){
    console.log('sdf');
    this.showChildSpinnner = true;
    this.currentId = id;
    this.isDisable =false;
    this.ClientService.getFee(id)
    .subscribe(
      (response : any[]) => {
        this.showChildSpinnner = false;
        console.log(response);
        if(response.length == 3){
          this.fields = response;
        }else{
          this.fields = [
            {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''},
            {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''},
            {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''}
        
          ];
        }
       
      }, // success path
      error => this.error = error // error path
    );
  }

  onSubmit(){
    this.feeSaveloader = true;
     this.ClientService.updateFee(this.currentId,this.fields).subscribe(
       (data)=>{
        this.feeSaveloader = false;
         console.log(data);
         this.toasterService.pop('success', 'Client Fee', 'Client Fee has been updated successfully.');
       }
     );
    //window.alert(JSON.stringify(this.fields));
  }

  setCurrentId(id,item){
    this.currentId = id;
    this.currentItem = item; 
  }

  deleteProduct(id) {
    this.isLoadingDelete = true;
    const i = this.currentItem;
    this.ClientService.delete(id).subscribe(data => {
    this.isLoadingDelete = false;
    this.data.splice(this.data.indexOf(i), 1);
    this.dangerModal.hide();
    this.toasterService.pop('success', 'Client', 'Client has been deleted successfully.');
    });
  }

}
