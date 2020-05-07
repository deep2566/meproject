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

      {
        name: 'Manage Actions',
        url: '/action-type',
        children: [
          {
            name: 'Action Type',
            url: '/action-type',
            
          }
        ]
      }


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


export const navItemsAR: INavData[] = [
  {
    name: 'لوحة القيادة',
    url: '/dashboard',
    icon: 'fa fa-home'
  },

  {
    name: 'مجموعات',
    url: '/collections',
    icon: 'fa fa-balance-scale',
  },

  {
    name: 'الإعدادات',
    url: '/apps',
    icon: 'icon-settings',
    children: [
      {
        name: 'إدارة ملف التعريف',
        icon: 'icon-speechs',
        children: [
          {
            name: 'الملف الشخصي لهواة الجمع',
            url: '/collector',
            icon: 'icon-speechs'
            
          },
          {
            name: 'صفحة الزبون الشخصية',
            url: '/clients',
            icon: 'icon-speechs'
            
          }
        ]
      },
      {
        name: 'ادارة المستخدمين',
        url: '/users',
        icon: 'icon-user',
      },

      {
        name: 'إدارة الإجراءات',
        url: '/action-type',
        children: [
          {
            name: 'نوع الإجراء',
            url: '/action-type',
            
          }
        ]
      }


    ]
  },
  {
    name: 'فواتير',
    icon: 'fa fa-file-picture-o',
    url: '/invoice',
    children: [
      {
        name: 'لجنة العميل',
        url: '/client-comission',
        icon: 'icon-stara'
      },
      {
        name: 'لجنة جامع',
        url: '/collector-comission',
        icon: 'icon-stara'
      }
    ]
  },
];