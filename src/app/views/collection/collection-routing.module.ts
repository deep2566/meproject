import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionComponent } from './collection.component';
import { CollectionAddComponent } from './collection-add/collection-add.component';
import { CollectionEditComponent } from './collection-edit/collection-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent,
    data: {
      title: 'Collection'
    }
  },
  {
    path: 'create',
    component: CollectionAddComponent,
    data: {
      title: 'Collection Add'
    }
  },
  {
    path: 'edit/:id',
    component: CollectionEditComponent,
    data: {
      title: 'Collection Edit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule {}
