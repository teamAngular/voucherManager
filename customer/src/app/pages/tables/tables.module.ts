import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../../theme/directives/directives.module';

export const routes = [
  { path: '', redirectTo: 'basic-tables', pathMatch: 'full'},
  { path: 'dynamic-tables', loadChildren: 'app/pages/tables/dynamic-tables/dynamic-tables.module#DynamicTablesModule', data: { breadcrumb: 'Dynamic Tables' } }
];

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  ]
})
export class TablesModule { }
