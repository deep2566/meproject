import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-home'
  },

  {
    name: 'Collections',
    url: '/tables/datatable',
    icon: 'fa fa-balance-scale',
  },

  {
    name: 'Settings',
    url: '/apps',
    icon: 'icon-settings',
    children: [
      {
        name: 'Manage Profile',
        url: '/apps/invoicing',
        icon: 'icon-speechs',
        children: [
          {
            name: 'Collector Profile',
            icon: 'icon-speechs'
            
          },
          {
            name: 'Client Profile',
            icon: 'icon-speechs'
            
          }
        ]
      },



    ]
  },
  {
    name: 'Invoices',
    icon: 'fa fa-file-picture-o',
      url: '/tables/datatable',
    children: [
      {
        name: 'Client Comission',
        icon: 'icon-stara'
      },
      {
        name: 'Collector Comission',
        icon: 'icon-stara'
      }
    ]
  },
];
