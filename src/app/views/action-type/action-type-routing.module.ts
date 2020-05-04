import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionTypeComponent } from './action-type.component';
import { ActionAddComponent } from './action-add/action-add.component';

const routes: Routes = [
  {
    path: '',
    component: ActionTypeComponent,
    data: {
      title: 'Action Type'
    }
  },
  {
    path: 'create',
    component: ActionAddComponent,
    data: {
      title: 'Action Add'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionTypeRoutingModule {}
