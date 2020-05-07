import { INavData } from '@coreui/angular';

export const collectorNavItems: INavData[] = [
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
        name: 'Collector Comission',
        url: '/collector-comission',
        icon: 'icon-stara'
      }
    ]
  },
];


export const collectorNavItemsAr: INavData[] = [
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