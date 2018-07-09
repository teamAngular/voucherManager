import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../../../theme/directives/directives.module';
import { SmartComponent } from './smart/smart.component';

export const routes = [
  { path: '', redirectTo: 'smart', pathMatch: 'full'},
  { path: 'smart', component: SmartComponent, data: { breadcrumb: 'Smart DataTable' } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SmartComponent,
  ]
})
export class DynamicTablesModule { }
