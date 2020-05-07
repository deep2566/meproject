import { INavData } from '@coreui/angular';

export const clientNavItems: INavData[] = [
  {
    name: 'Collections',
    url: '/collections',
    icon: 'fa fa-balance-scale',
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
      }
    ]
  },
];

export const clientNavItemsAr: INavData[] = [
  {
    name: 'مجموعات',
    url: '/collections',
    icon: 'fa fa-balance-scale',
  },
  
  {
    name: 'فواتير',
    icon: 'fa fa-file-picture-o',
    url: '/invoice',
    children: [
      
      {
        name: 'لجنة جامع',
        url: '/collector-comission',
        icon: 'icon-stara'
      }
    ]
  },
];
