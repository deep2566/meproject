import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ClientComissionComponent } from './views/client-comission/client-comission.component';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'invoice-generate/:id',
    component: InvoiceComponent,
    data: {
      title: 'Invoice'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'user/create',
        loadChildren: () => import('./product-add/product-add.module').then(m => m.ProductAddModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./product-edit/product-edit.module').then(m => m.ProductEditModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./product-get/product-get.module').then(m => m.ProductGetModule)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'editors',
        loadChildren: () => import('./views/editors/editors.module').then(m => m.EditorsModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'google-maps',
        loadChildren: () => import('./views/google-maps/google-maps.module').then(m => m.GoogleMapsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'plugins',
        loadChildren: () => import('./views/plugins/plugins.module').then(m => m.PluginsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./views/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'collector',
        loadChildren: () => import('./views/collector/collector.module').then(m => m.CollectorModule)
      },
      {
        path: 'collections',
        loadChildren: () => import('./views/collection/collection.module').then(m => m.CollectionModule)
      },

      {
        path: 'clients',
        loadChildren: () => import('./views/client/client.module').then(m => m.ClientModule)
      },

      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./views/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'client-comission',
        loadChildren: () => import('./views/client-comission/client-comission.module').then(m => m.ClientComissionModule)
      },
      {
        path: 'collector-comission',
        loadChildren: () => import('./views/collector-comission /collector-comission.module').then(m => m.CollectorComissionModule)
      },
      {
        path: 'invoice-generate',
        loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
      },
	   {
        path: 'action-type',
        loadChildren: () => import('./views/action-type/action-type.module').then(m => m.ActionTypeModule)
        // component: ActionTypeComponent
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
