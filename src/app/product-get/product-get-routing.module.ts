import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductGetComponent } from './product-get.component';

const routes: Routes = [
  {
    path: '',
    component: ProductGetComponent,
    data: {
      title: 'Users'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGetRoutingModule {}
