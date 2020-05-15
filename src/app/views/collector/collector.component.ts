import { Component,ViewEncapsulation,ViewChild} from '@angular/core';
import { TableData, CollectorService } from './collector.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  templateUrl: 'collector.component.html',
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss','../../../../node_modules/ladda/dist/ladda-themeless.min.css'],
  providers: [ CollectorService,ToasterService ],
  encapsulation: ViewEncapsulation.None
})
export class CollectorComponent {
  @ViewChild('dangerModal', {static: false}) public dangerModal: ModalDirective;

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });

  fields:any =[
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},

  ];
  // fields:any =[
  //   {start_percentage:'',end_percentage:'',comission:''}

  // ];
  public showSpinnner =true;
  error: any;
  public data: TableData;
  public filterQuery = '';
  public isDisable = true;
  public currentId = '';
  public showChildSpinnner= false;
  public feeSaveloader = false;
  public currentItem:any;
  public isLoadingDelete =false;

  constructor(private toasterService: ToasterService,private CollectorService: CollectorService) {
    this.CollectorService.getData()
      .subscribe(
        (data: TableData) => {
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

  enableField(id){
    this.showChildSpinnner = true;
    this.currentId = id;
    this.isDisable =false;
    this.CollectorService.getFee(id)
    .subscribe(
      (response : any[]) => {
        this.showChildSpinnner = false;
        console.log(response);
          this.fields = response;
         if(response.length > 0){
          this.fields = response;
        }else{
          this.fields = [
            {start_percentage:'',end_percentage:'',comission:''},
            {start_percentage:'',end_percentage:'',comission:''},
            {start_percentage:'',end_percentage:'',comission:''},
            {start_percentage:'',end_percentage:'',comission:''},
            {start_percentage:'',end_percentage:'',comission:''},
        
          ];
        } 
       
      }, // success path
      error => this.error = error // error path
    );
  }

  onSubmit(){
    this.feeSaveloader = true;
     this.CollectorService.updateFee(this.currentId,this.fields).subscribe(
       (data)=>{
        this.feeSaveloader = false;
         console.log(data);
         this.toasterService.pop('success', 'Collector Fee', 'Collector Fee has been updated successfully.');
       }
     );    
  }

  setCurrentId(id,item){
    this.currentId = id;
    this.currentItem = item; 
  }

  deleteProduct(id) {
    this.isLoadingDelete = true;
    const i = this.currentItem;
    this.CollectorService.delete(id).subscribe(data => {
    this.isLoadingDelete = false;
    this.data.splice(this.data.indexOf(i), 1);
    this.dangerModal.hide();
    this.toasterService.pop('success', 'Collector', 'Collector has been deleted successfully.');
    });
  }


}
