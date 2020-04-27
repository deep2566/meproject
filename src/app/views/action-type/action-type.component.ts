import { Component, OnInit } from '@angular/core';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster/angular2-toaster';
import { ActionTypeService } from './action-type.service';


@Component({
  selector: 'app-action-type',
  providers: [ ToasterService ],
  templateUrl: './action-type.component.html',
  styleUrls: ['./action-type.component.css']
})
export class ActionTypeComponent {

  
  public toasterconfig: ToasterConfig =  new ToasterConfig({
    tapToDismiss: true,
    timeout: 5000
  });
  error: any;
  public data: any;
  public showSpinnner = true;
  public filterQuery = '';
  public actionData = {};
  constructor(private actionTypeService: ActionTypeService, private toasterService: ToasterService) {
    this.getActionTypeData();
   }

  ngOnInit(): void {
  }

  getActionTypeData(){
    
    this.actionTypeService.getAction()
      .subscribe(
        (data) => {
          setTimeout(() => {
            console.log('data',data);
            this.showSpinnner =false;
            this.data = data;
            }, 100);
        }, // success path
        error => this.error = error // error path
      );
  }

  delete(id,type) {
    if(confirm('Are you sure you want to delete?')){

      this.actionTypeService.delete(id,type)
      .subscribe(data => {
        for (let item  of this.data) {
            if (item.id == id) {
                this.data.splice(this.data.indexOf(item), 1);
            }      
        }
        this.toasterService.pop('success', 'Collection', 'Collection has been deleted successfully.');
      });
    }
  }

}
