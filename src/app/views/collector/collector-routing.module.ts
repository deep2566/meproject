import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectorComponent } from './collector.component';
import { CollectorAddComponent } from './collector-add/collector-add.component';
import { CollectorEditComponent } from './collector-edit/collector-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CollectorComponent,
    data: {
      title: 'Collector'
    }
  },
  {
    path: 'create',
    component: CollectorAddComponent,
    data: {
      title: 'Collector Add'
    },

  },
  {
    path: 'edit/:id',
    component: CollectorEditComponent,
    data: {
      title: 'Collector Edit'
    },
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorRoutingModule {}
