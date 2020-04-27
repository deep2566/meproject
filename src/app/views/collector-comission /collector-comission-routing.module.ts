import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectorComissionComponent } from './collector-comission.component';

const routes: Routes = [
  {
    path: '',
    component: CollectorComissionComponent,
    data: {
      title: 'Collector Comission'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorComissionRoutingModule {}
