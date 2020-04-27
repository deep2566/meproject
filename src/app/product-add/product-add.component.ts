import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

import {AlertService } from '../views/notifications/alert.service'


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  loading = false;
  angForm: FormGroup;
  public roles ={};
  constructor(private fb: FormBuilder,
    private alertService: AlertService, 
    private ps: ProductsService,private router: Router) {
    this.createForm();

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
      email: ['', [Validators.required,Validators.email] ],
      password: ['', [Validators.required] ],
      role: ['', Validators.required ]
    });
  }

  add(name,username,email,password,role) {
    this.loading =true;
    this.ps.add(name,username,email,password,role)
    .subscribe(data => {
      this.loading = false;
      this.alertService.success('User has been added successfully.', true)
      this.router.navigate(['/users'])
    });
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/users'])
  }

}