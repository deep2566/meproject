import { Component,ViewChild,ViewEncapsulation } from '@angular/core';
import { TableData, CollectionService } from './collection.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { FormGroup, FormBuilder, Validators, NgForm,ReactiveFormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {AlertService } from '../notifications/alert.service';
import { environment } from '../../../environments/environment';


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

  public showSpinnner = true;
  form: FormGroup;
  amountaddForm: FormGroup;
  phoneaddForm:FormGroup;

  constructor(private alertService: AlertService, private router: Router,public fb: FormBuilder,private toasterService: ToasterService,private CollectionService: CollectionService) {
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

      this.CollectionService.getAction()
      .subscribe(
        (data: any) => {
            this.actions = data;
        }
      );

      this.amountaddForm = this.fb.group({
        clamount: ['', Validators.required ]
      });

      this.form = this.fb.group({
        avatar: [null]
      })

      this.phoneaddForm = this.fb.group({
        phone: ['', Validators.required ]
      })
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

    console.log(level_one);

    if(level_one!='' && level_two!='' && level_three!='' && notes!=''){
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

  addAmount(data,id){
    console.log(data);
    this.amountaddForm.reset();
  }

}
