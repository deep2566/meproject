import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router,ActivatedRoute } from '@angular/router';


import {AlertService } from '../../notifications/alert.service'


@Component({
  templateUrl: './client-edit.component.html',
  styleUrls: [
    '../../../../../node_modules/ngx-bootstrap/datepicker/bs-datepicker.scss',
    '../../../../scss/vendors/ng-select/ng-select.scss'
  ],
  encapsulation: ViewEncapsulation.None,
  providers:[ClientService]
})
export class ClientEditComponent implements OnInit {
  fields:any =[
    {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''},
    {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''},
    {start_amount:'',end_amount:'',percentage_with_doc_without_legal:'',percentage_without_doc_without_legal:'',percentage_with_legal_with_doc:'',percentage_with_legal_without_doc:''}
  ];
  loading = false;
  angForm: FormGroup;

   // Datepicker

   bsValue: Date = new Date();
   bsValue2: Date = new Date();

  collector: any = {};
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private alertService: AlertService, 
    private router: Router,
    private ps : ClientService
    ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [Validators.required,Validators.email] ],
      phone: ['', Validators.required ],
      address:['',Validators.required]
      
    });
  }

  update(name,email,phone,address,id) {
    this.loading = true;
    this.route.params.subscribe(params => {
      this.ps.update(name,email,phone,address,params.id,this.fields)
      .subscribe(res => {
        this.loading = false;
        this.alertService.success('Client has been updated successfully.', true)
        this.router.navigate(['/clients'])
        this.loading = true;
      });
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => { 
        this.ps.edit(params['id']).subscribe(res => {
          this.collector = res;
          var v = this.collector.client_fee;
          var count = 0;
          if(v.length > 0){
            for (var i = 0; i < v.length; i++){
              this.fields[i].start_amount= v[i].start_amount;
              this.fields[i].end_amount= v[i].end_amount;
              this.fields[i].percentage_with_doc_without_legal= v[i].percentage_with_doc_without_legal;
              this.fields[i].percentage_without_doc_without_legal= v[i].percentage_without_doc_without_legal;
              this.fields[i].percentage_with_legal_with_doc= v[i].percentage_with_legal_with_doc;
              this.fields[i].percentage_with_legal_without_doc= v[i].percentage_with_legal_without_doc;
            }
          }
      });
    });
  }

  back(){
    this.router.navigate(['/clients'])
  }

}