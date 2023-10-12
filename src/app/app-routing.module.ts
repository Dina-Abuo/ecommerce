import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


import { NotFond404Component } from './components/not-fond404/not-fond404.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { GroupsComponent } from './components/groups/groups.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: AddToCartComponent },
  { path: 'grous-products/:categroyID', component: GroupsComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFond404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
