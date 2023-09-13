import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/product/product.component';
import { SHadowItemDirective } from './Directives/shadow-item.directive';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFond404Component } from './components/not-fond404/not-fond404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    ProductComponent,
    SHadowItemDirective,
    CreditCardPipe,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFond404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
