import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import {MerchantComponent} from './merchant/merchant.component';
import {ClientComponent} from './client/client.component'


export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
               
      { path: 'admin', component: AdminComponent, data: { breadcrumb: 'Admin' } },

      { path: 'merchant', component:MerchantComponent, data: { breadcrumb: 'Merchant' } },

          { path: 'client', component:ClientComponent, data: { breadcrumb: 'client' } },

     
       //{ path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }  },
      // { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
      // { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' } },
      // { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
      // { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' } },
      //{ path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' } },
      //  { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
      //  { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
      //  { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
      //  { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }  },          
      // { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
      //{ path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } }
      //chelsea commented this  out because she said they were not making any change to the code 
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);