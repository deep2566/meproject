import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    data: {
      title: 'Client'
    }
  },
  {
    path: 'create',
    component: ClientAddComponent,
    data: {
      title: 'Client Add'
    },

  },
  {
    path: 'edit/:id',
    component: ClientEditComponent,
    data: {
      title: 'Client Edit'
    },
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
