import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DisplayProductComponent } from './display-product/display-product.component';

const routes: Routes = [
  {path: 'app-register',component: RegistrationComponent},
  {path: 'app-login' , component: LoginComponent},
  {path: 'app-display-product', component: DisplayProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
