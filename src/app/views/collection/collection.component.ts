import { Component,ViewChild,ViewEncapsulation } from '@angular/core';
import { TableData, CollectionService } from './collection.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { FormGroup, FormBuilder, Validators, NgForm,ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {AlertService } from '../notifications/alert.service';
import { environment } from '../../../environments/environment';
import * as XLSX from 'xlsx';




@Component({
  templateUrl: 'collection.component.html',
  providers: [ CollectionService,ToasterService ],
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss','../../../../node_modules/ladda/dist/ladda-themeless.min.css']
})
export class CollectionComponent {

  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });

  @ViewChild('primaryModal', {static: false}) public primaryModal: ModalDirective;
  @ViewChild('actionModal', {static: false}) public actionModal: ModalDirective;
  @ViewChild('attachModal', {static: false}) public attachModal: ModalDirective;
  @ViewChild('amountModal', {static: false}) public amountModal: ModalDirective;
  @ViewChild('importModal', {static: false}) public importModal: ModalDirective;
 
  error: any;
  public data: any;
  public filterQuery = '';
  public currentItem ={};
  public disablePhone =true;
  public savebuttonLoader =false;
  public actions = {};
  public level_one ='';
  public level_two ='';
  public level_three ='';
  public item:any;
  public currentUser:any;
  public showSpinnner = true;
  public totalData = {};

  public totalAmount     = 0;
  public remainingAmount = 0;
  public collectedAmount = 0;

 

  form: FormGroup;
  amountaddForm: FormGroup;
  phoneaddForm:FormGroup;
  importCollectionForm:FormGroup;

  constructor(private alertService: AlertService, private router: Router,public fb: FormBuilder,private toasterService: ToasterService,private CollectionService: CollectionService) {
      this.CollectionService.getData()
      .subscribe(
        (data) =>  {
          setTimeout(() => {
            this.showSpinnner =false;
            this.data = [...data];
            }, 100);
        }, // success path
        error => this.error = error // error path
      );

      this.CollectionService.getAction()
      .subscribe(
        (data: any) => {
            this.actions = data;
        }
      );

      this.CollectionService.getTotalDetail()
      .subscribe(
        (data: any) => {
            this.totalData = data;
        }
      );

      this.amountaddForm = this.fb.group({
        clamount: ['', Validators.required ]
      });

      this.importCollectionForm = this.fb.group({
        importCollection: ['', [Validators.required, this.CollectionService.requiredFileType() ]]
      });

      this.form = this.fb.group({
        avatar: [null]
      })

      this.phoneaddForm = this.fb.group({
        phone: ['', Validators.required ]
      })
	  
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    

    
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

  public setCurrentItem(currentItem) {
    this.currentItem = currentItem;
    console.log(currentItem);
  }

  checkPhoneValue(value){
    if(value!=''){
      this.disablePhone= false;
    }
  }

  addPhone(phone,collection_id) {
    
    this.savebuttonLoader= true;
    this.CollectionService.addPhone(phone,collection_id)
    .subscribe(data => {
      this.phoneaddForm.reset();
      this.savebuttonLoader= false;
      this.currentItem = data;
      this.primaryModal.hide();
      this.toasterService.pop('success', 'Phone', 'Phone Number has been added successfully.');
    });
  }

  setOptionOne(value) {
   this.level_one= value;
  }

  setOptionTwo(value) {
    this.level_two= value;
  }

  setOptionThree(value) {
    this.level_three= value;
  }

  download(id){
    this.CollectionService.downloadAttach(id)
      .subscribe(data => {
        if(data){
          window.location.href =environment.apiUrl+"collection/download-attachment/"+id;
        }else{
          this.toasterService.pop('error', 'Attachment', 'File not exist.');
        }
      });
  }

  delete(id) {
    this.CollectionService.delete(id)
    .subscribe(data => {
      for (let item  of this.data) {
          if (item.id == id) {
              this.data.splice(this.data.indexOf(item), 1);
          }      
      }
      this.toasterService.pop('success', 'Collection', 'Collection has been deleted successfully.');
    });
  }
 

  addAction(level_one,level_two,level_three,notes,collection_id) { 
    console.log('level one value get');

    if(level_one ==''){
      level_one=1;
    }
    if(level_two ==''){
      level_two=1;
    }
    if(level_three ==''){
      level_three=1;
    }

    if(notes!=''){
      this.savebuttonLoader= true;
      this.CollectionService.addAction(level_one,level_two,level_three,notes,collection_id)
      .subscribe(data => {
        this.savebuttonLoader= false;
        this.currentItem = data;
        this.actionModal.hide();
        this.toasterService.pop('success', 'Action', 'Action has been added successfully.');
        // this.loading = false;
        // this.alertService.success('Collector has been added successfully.', true)
        // this.router.navigate(['/collector'])
      });
    }    

  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitAttachment(id) {
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append("collection_id",id);
    formData.append("avatar", this.form.get('avatar').value);

    this.CollectionService.addAttach(formData)
    .subscribe(data => {
      this.savebuttonLoader= false;
      this.currentItem = data;
      this.attachModal.hide();
      this.toasterService.pop('success', 'Attachment', 'Attachment has been added successfully.');
      // this.loading = false;
      // this.alertService.success('Collector has been added successfully.', true)
      // this.router.navigate(['/collector'])
    });

  }

  downloadCollection(){
    window.location.href = environment.apiUrl+'download-collection';
  }

  getCollectionsData(){
      this.CollectionService.getData()
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

  addAmount(data,currentItem){
    var id = currentItem.id;

    if((Number(data.clamount) + Number(currentItem.collected_amount)) > currentItem.amount ){
      console.log(data.clamount + currentItem.collected_amount);
      this.toasterService.pop('error', 'Payment', 'Amount should be less than to total amount');
      return false;
    }

    if(confirm('Are you sure to add ?')){

      console.log(data);
      console.log('id',id);
      this.CollectionService.addDbtAmount({'id':id, 'clamount':data.clamount})
      .subscribe(data => {
        console.log('data', data);
      });
      this.amountaddForm.reset();
      this.amountModal.hide();
      this.toasterService.pop('success', 'Payment', 'Payment has been added successfully.');
      this.getCollectionsData();
    }
  }  

  uploadExcel(event){
    localStorage.removeItem('excelData');
    const excelFile = (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();  
    const shortlistsRow = []
    reader.onload = (e)=> {  
      let data = (<any>e.target).result;  
      let workbook = XLSX.read(data, {  
        type: 'binary'  
      });  

      workbook.SheetNames.forEach((name) => {
        const sheet = workbook.Sheets[name];
        let XL_row_object = XLSX.utils.sheet_to_json(sheet);
        XL_row_object.forEach(function(row){
          shortlistsRow.push(row)
        });
      }, {}); 
      
      localStorage.setItem('excelData', JSON.stringify(shortlistsRow));     
    };
    reader.onerror = function(ex) {  
      console.log(ex);  
    };  
    reader.readAsBinaryString(excelFile);
  }

  submitExcel() {
    const excelData = localStorage.getItem('excelData');
    const th = this
    JSON.parse(excelData).forEach(function(data, idx, array){
      th.CollectionService.addExcel(data)
      .subscribe(data => {
        console.log('idx '+idx);
        console.log('arraylength '+array.length);
        if (idx === array.length - 1){ 
          th.importCollectionForm.reset();
          th.importModal.hide();
          th.getCollectionsData();
          localStorage.removeItem('excelData');
          th.toasterService.pop('success', 'Action', 'Collections has been added successfully,only valid collector id and client id inserted.');
        }
      });
    })
    console.log('final');
  }
  


}
