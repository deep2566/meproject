import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectorService } from '../collector.service';
import { Router,ActivatedRoute } from '@angular/router';


import {AlertService } from '../../notifications/alert.service'


@Component({
  templateUrl: './collector-edit.component.html',
  styleUrls: [
    '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class CollectorEditComponent implements OnInit {

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

  collector: any = {};
  res: any ={};


  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
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
      id_number: ['', Validators.required ],
      start_date:['',Validators.required],
      dob:['',Validators.required]
      
    });
  }

  update(name,email,id_number,start_date,dob,id) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.ps.update(name,email,id_number,start_date,dob,params.id,this.fields)
      .subscribe(res => {
        this.loading = false;
        this.alertService.success('Collector has been updated successfully.', true)
        this.router.navigate(['/collector'])
        this.loading = true;
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ps.edit(params['id']).subscribe(res => {
          this.collector = res;
          var v = this.collector.colletor_fee;
          var count = 0;
          if(v.length > 0){
            for (var i = 0; i < v.length; i++){
              this.fields[i].start_percentage= v[i].start_percentage;
              this.fields[i].end_percentage= v[i].end_percentage;
              this.fields[i].comission= v[i].comission;
            }
          }
      });
    });
  }

  back(){
    this.router.navigate(['/collector'])
  }

}