import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import Product from '../Product';
import { TableData,ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertService } from '../views/notifications/alert.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { ModalDirective } from 'ngx-bootstrap';
 

@Component({
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css','../../scss/vendors/toastr/toastr.scss','../../../node_modules/ladda/dist/ladda-themeless.min.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ToasterService]
})
export class ProductGetComponent implements OnInit {
  //private toasterService: ToasterService;
  @ViewChild('dangerModal', {static: false}) public dangerModal: ModalDirective;
  public roles ={};
  public item:any;
  public currentId='';
  public currentItem:any;
  public isLoadingDelete =false;

  public toasterconfig: ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 5000
    });

  error: any;
  public data: TableData;
  public showSpinnner = true;
  public filterQuery = '';
  products: Product[];
  constructor(private ps: ProductsService,
    private router: Router,
    private alertService: AlertService,private toasterService: ToasterService) { 
      this.toasterService = toasterService;

      this.ps.getRoles()
      .subscribe(
        (data: any) => {
            this.roles = data;
        }
      );

    }

  deleteProduct(id) {
      this.isLoadingDelete = true;
      const i = this.currentItem;
      this.ps.deleteProduct(id).subscribe(data => {
      this.isLoadingDelete = false;
      this.data.splice(this.data.indexOf(i), 1);
      this.dangerModal.hide();
      this.toasterService.pop('success', 'User', 'User has been deleted successfully.');
      });
  }
  
  setCurrentId(id,item){
    this.currentId = id;
    this.currentItem = item; 

  }




  // showSuccess() {
  //   this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
  // }
  
  ngOnInit() {
    this.ps
      .getProducts()
      .subscribe(
        (data: TableData) => {
          
          setTimeout(() => {
           this.showSpinnner =false;
            //this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
           
            // this.alertService.error('viren');
            // this.alertService.getAlert();
            this.data = [...data];
          },100);
           
        }, // success path
        error => this.error = error // error path
      );
  }

}