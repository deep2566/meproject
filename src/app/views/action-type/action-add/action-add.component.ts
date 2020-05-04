import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';


import {AlertService } from '../../notifications/alert.service'
import { ActionTypeService } from './../action-type.service';


@Component({
  templateUrl: './action-add.component.html',
  styleUrls: [
    '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  providers: [ ActionTypeService ],
  encapsulation: ViewEncapsulation.None
})
export class ActionAddComponent implements OnInit {

  
  loading = false;
  angForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ps : ActionTypeService,
    private alertService: AlertService, 
    private router: Router
    ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      lavel: ['', Validators.required ]
    });
  }

  add(name,lavel) {
    console.log('name '+name);
    console.log('lavel '+lavel);
    this.loading =true;
    this.ps.add(name,lavel)
    .subscribe(data => {
      this.loading = false;
      this.alertService.success('Action has been added successfully.', true)
      this.router.navigate(['/action-type'])
    });
  }

  ngOnInit() {
    console.log('asdfsadf');
  }

  back(){
    this.router.navigate(['/action-type'])
  }

}