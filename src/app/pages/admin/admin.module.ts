import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import { BasicTablesComponent } from '../../pages/tables/basic-tables/basic-tables.component';

export const routes = [
  { path: '', component: AdminComponent, pathMatch: 'full' }
 ];
 


 @NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent,
    BasicTablesComponent

  ]
})
export class AdminModule { }
