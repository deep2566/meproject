import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectorService } from '../collector.service';
import { Router } from '@angular/router';


import {AlertService } from '../../notifications/alert.service'


@Component({
  templateUrl: './collector-add.component.html',
  styleUrls: [
    '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CollectorAddComponent implements OnInit {
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
    private alertService: AlertService, 
    private router: Router,
    private ps : CollectorService
    ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required,Validators.email] ],
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      id_number: ['', Validators.required ],
      start_date:['',Validators.required],
      dob:['',Validators.required]
      
    });
  }

  add(name,email,password,id_number,start_date,dob,username) {
    console.log('sdfsdfsdfdsfsd');
    console.log(this.fields);
    this.loading =true;
    this.ps.add(name,email,password,id_number,start_date,dob,username,this.fields)
    .subscribe(data => {
      this.loading = false;
      this.alertService.success('Collector has been added successfully.', true)
      this.router.navigate(['/collector'])
    });
  }

  ngOnInit() {
    console.log('asdfsadf');
  }

  back(){
    this.router.navigate(['/collector'])
  }

}