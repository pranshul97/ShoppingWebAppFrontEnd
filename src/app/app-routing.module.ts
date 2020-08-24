import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CompareComponent } from './compare/compare.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path: 'app-register',component: RegistrationComponent},
  {path: 'app-login' , component: LoginComponent},
  {path: 'app-display-product', component: DisplayProductComponent},
  {path: 'app-compare', component: CompareComponent},
  { path: 'app-user-registration', component: UserRegistrationComponent},
  {path: 'app-user-login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
