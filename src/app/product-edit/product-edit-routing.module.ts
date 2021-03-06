import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductEditComponent } from './product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductEditComponent,
    data: {
      title: 'Products'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductEditRoutingModule {}
