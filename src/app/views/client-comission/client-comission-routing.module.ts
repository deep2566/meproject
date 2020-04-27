import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComissionComponent } from './client-comission.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComissionComponent,
    data: {
      title: 'Client Comission'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientComissionRoutingModule {}
