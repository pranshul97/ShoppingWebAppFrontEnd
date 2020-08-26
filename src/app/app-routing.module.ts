import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CompareComponent } from './compare/compare.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DisplayAllProductsComponent } from './display-all-products/display-all-products.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteprofileComponent } from './deleteprofile/deleteprofile.component';
import { RetailerdetailsComponent } from './retailerdetails/retailerdetails.component';


const routes: Routes = [
  {path: 'app-register',component: RegistrationComponent},
  {path: 'app-login' , component: LoginComponent},
  {path: 'app-display-product/:productId', component: DisplayProductComponent},
  {path: 'app-compare', component: CompareComponent},
  { path: 'app-user-registration', component: UserRegistrationComponent},
  {path: 'app-user-login', component: UserLoginComponent},
  /*{path: 'app-display-all-products', component: DisplayAllProductsComponent},*/
  {path: 'app-display-all-products/:value' , component: DisplayAllProductsComponent},
  {path: 'app-retailerdashboard', component: RetailerdashboardComponent},
  {path: '', component: HomepageComponent},
  {path:'app-homepage', component: HomepageComponent},
  {path: 'app-addproducts', component: AddproductComponent},
  {path: 'app-deleteprofile',component: DeleteprofileComponent},
  {path: 'app-retailerdetails', component: RetailerdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
