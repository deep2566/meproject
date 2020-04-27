import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';


import {AlertService } from '../../notifications/alert.service'
import { ClientService } from '../client.service';


@Component({
  templateUrl: './client-add.component.html',
  styleUrls: [
    '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  providers: [ ClientService ],
  encapsulation: ViewEncapsulation.None
})
export class ClientAddComponent implements OnInit {
  fields:any =[
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},
    {start_percentage:'',end_percentage:'',comission:''},

  ];
  
  loading = false;
  angForm: FormGroup;

   // Datepicker


 
   bsValue: Date = new Date();
   bsValue2: Date = new Date();

  constructor(private fb: FormBuilder,
    private ps : ClientService,
    private alertService: AlertService, 
    private router: Router
    ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required,Validators.email] ],
      phone: ['', Validators.required ],
      address: ['', Validators.required ]
    });
  }

  add(name,email,phone,address) {
    console.log('add call in component');
    this.loading =true;
    this.ps.add(name,email,phone,address)
    .subscribe(data => {
      this.loading = false;
      this.alertService.success('Client has been added successfully.', true)
      this.router.navigate(['/clients'])
    });
  }

  ngOnInit() {
    console.log('asdfsadf');
  }

  back(){
    this.router.navigate(['/clients'])
  }

}