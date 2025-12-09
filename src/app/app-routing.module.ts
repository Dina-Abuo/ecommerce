import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFond404Component } from './components/not-fond404/not-fond404.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { GroupsComponent } from './components/groups/groups.component';
import { LoginComponent } from './components/login/login.component';
import { SignUPComponent } from './components/sign-up/sign-up.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SingleProductComponent } from './components/single-product/single-product.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },//default path
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: AddToCartComponent },
      { path: 'groups-products/:categoryID', component: GroupsComponent },
      { path: 'products/:id', component: SingleProductComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signUp', component: SignUPComponent },
    ]
  },
  { path: 'dashBoard', loadChildren: () => import('./components/dash-board/dash-board.module').then(m => m.DashBoardModule) },
  { path: '**', component: NotFond404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
