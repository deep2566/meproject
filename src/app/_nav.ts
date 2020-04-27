import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-home'
  },

  {
    name: 'Collections',
    url: '/collections',
    icon: 'fa fa-balance-scale',
  },

  {
    name: 'Settings',
    url: '/apps',
    icon: 'icon-settings',
    children: [
      {
        name: 'Manage Profile',
        icon: 'icon-speechs',
        children: [
          {
            name: 'Collector Profile',
            url: '/collector',
            icon: 'icon-speechs'
            
          },
          {
            name: 'Client Profile',
            url: '/clients',
            icon: 'icon-speechs'
            
          }
        ]
      },
      {
        name: 'Manage Users',
        url: '/users',
        icon: 'icon-user',
      },



    ]
  },
  {
    name: 'Invoices',
    icon: 'fa fa-file-picture-o',
    url: '/invoice',
    children: [
      {
        name: 'Client Comission',
        url: '/client-comission',
        icon: 'icon-stara'
      },
      {
        name: 'Collector Comission',
        url: '/collector-comission',
        icon: 'icon-stara'
      }
    ]
  },
];
