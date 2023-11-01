import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { FormProductComponent } from './form-product/form-product.component';
import { TableProductComponent } from './table-product/table-product.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { SidebarDashComponent } from './sidebar-dash/sidebar-dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashBoardComponent,
    FormProductComponent,
    TableProductComponent,
    TableUsersComponent,
    SidebarDashComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashBoardModule { }
