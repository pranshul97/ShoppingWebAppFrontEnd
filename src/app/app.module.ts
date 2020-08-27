import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule} from '@angular/common/http';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CompareComponent } from './compare/compare.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';


import { DisplayAllProductsComponent } from './display-all-products/display-all-products.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddproductComponent } from './addproduct/addproduct.component';


import { RetailerdetailsComponent } from './retailerdetails/retailerdetails.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { BrandProductsComponent } from './brand-products/brand-products.component';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';
import { FinaldisplayComponent } from './finaldisplay/finaldisplay.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    RegistrationComponent,
    DisplayProductComponent,
    CompareComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    DisplayAllProductsComponent,
    RetailerdashboardComponent,
    DashboardComponent,
    HomepageComponent,
    AddproductComponent,
    RetailerdetailsComponent,
    CategoryComponent,
    DeleteprofileComponent,
    CartComponent,
    BrandProductsComponent,
    AdminComponent,
    PaymentComponent,
    FinaldisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
