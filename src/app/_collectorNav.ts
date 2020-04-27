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
