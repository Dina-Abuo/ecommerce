import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SHadowItemDirective } from './Directives/shadow-item.directive';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NotFond404Component } from './components/not-fond404/not-fond404.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { GroupsComponent } from './components/groups/groups.component';
import { LoginComponent } from './components/login/login.component';
import { SignUPComponent } from './components/sign-up/sign-up.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    SHadowItemDirective,
    CreditCardPipe,
    HomeComponent,
    NotFond404Component,
    SliderComponent,
    SingleProductComponent,
    AddToCartComponent,
    GroupsComponent,
    LoginComponent,
    SignUPComponent,
    MainLayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
