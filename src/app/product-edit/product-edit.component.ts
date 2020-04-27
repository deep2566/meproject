import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {AlertService } from '../views/notifications/alert.service';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
 

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css','../../scss/vendors/toastr/toastr.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ToasterService]
})
export class ProductEditComponent implements OnInit {
  
  public loading = false;
  public roles = {};
  public toasterconfig: ToasterConfig =
  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });

  angForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute,
     private alertService: AlertService,
     private router: Router, 
     private ps: ProductsService, private fb: FormBuilder,
     private toasterService: ToasterService) {
     this.createForm();
     this.toasterService = toasterService;
           role: ['', Validators.required ]
     this.ps.getRoles()
     .subscribe(
       (data: any) => {
           this.roles = data;
       }
     );
 }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      username: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['' ],
      role: ['', Validators.required ]
    });
  }

  update(name,role,id) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.ps.updateProduct(name,role,params.id)
      .subscribe(res => {
        this.loading = false;
        this.alertService.success('User has been updated successfully.', true)
        this.router.navigate(['/users'])
        this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
        this.loading = true;
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.editProduct(params['id']).subscribe(res => {
          this.user = res;
      });
    });
  }

  back(){
    this.router.navigate(['/users'])
  }
}