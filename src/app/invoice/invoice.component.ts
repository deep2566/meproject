import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../views/collection/collection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  providers: [CollectionService]
})
export class InvoiceComponent implements OnInit {

  public item = {};
  public collectorId ='';

  constructor(private cs :CollectionService,private router : Router,private route : ActivatedRoute) { 

    this.route.params.subscribe(params => {
      this.collectorId = params.id;
     });
     
    this.cs.getComissions(this.collectorId)
    .subscribe(
      (data: any) => {
          this.item = data;
      }
    );

 

  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/client-comission'])
  }

}
