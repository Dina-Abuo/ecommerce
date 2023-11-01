import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';
import { FormProductComponent } from './form-product/form-product.component';
import { TableProductComponent } from './table-product/table-product.component';
import { TableUsersComponent } from './table-users/table-users.component';

const routes: Routes = [
  {
    path: '', component: DashBoardComponent, children: [
      { path: '', redirectTo: 'tableProducts', pathMatch: 'full' },//default path
      { path: 'tableProducts', component: TableProductComponent },
      { path: 'tableUsers', component: TableUsersComponent },
      { path: 'createProoduct', component: FormProductComponent },
      { path: 'editeProduct/:productID', component: FormProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
