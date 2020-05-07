import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';


import {AlertService } from '../../notifications/alert.service'
import { CollectionService } from '../collection.service'; 


@Component({
  templateUrl: './collection-add.component.html',
  styleUrls: [
    '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  providers: [ CollectionService ],
  encapsulation: ViewEncapsulation.None
})
export class CollectionAddComponent implements OnInit {
  public clients =  {};
  public collectors =  {}; 

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
    private ps : CollectionService,
    private alertService: AlertService, 
    private router: Router
    ) {
    this.createForm();

    this.ps.getClients()
    .subscribe(
      (data: any) => {
          this.clients = data;
      }
    );

    this.ps.getCollectors()
    .subscribe(
      (data: any) => {
          this.collectors = data;
      }
    );

  }

  createForm() {
    this.angForm = this.fb.group({
      client_id: ['', Validators.required ],
      collector_id: ['', Validators.required ],
      debtor_name: ['', Validators.required ],
      debtor_email: ['', Validators.required ],
      debtor_phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$") ]],
      amount: ['', Validators.required ],
      description: ['', Validators.required ],
      is_provide_documents: ['', Validators.required ],
      is_legal_procedure: ['', Validators.required ]
    });
  }

  add(data) {
    console.log('collection data')
    console.log(data);
    this.loading =true;
    this.ps.add(data)
    .subscribe(data => {
      this.loading = false;
      this.alertService.success('Collection has been added successfully.', true)
      this.router.navigate(['/collections'])
    });
  }

  ngOnInit() {
    console.log('asdfsadf');
  }

  back(){
    this.router.navigate(['/collections'])
  }

}