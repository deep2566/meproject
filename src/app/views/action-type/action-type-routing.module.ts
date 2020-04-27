import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionTypeComponent } from './action-type.component';

const routes: Routes = [
  {
    path: '',
    component: ActionTypeComponent,
    data: {
      title: 'Action Type'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionTypeRoutingModule {}
