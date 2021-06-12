import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";

import {TargetRegisterComponent} from "./components/target-register/target-register.component";
import {ClientProfileComponent} from "./components/client-profile/client-profile.component";
import {ProviderProfileComponent} from "./components/provider-profile/provider-profile.component";
import { HomeProveedorComponent } from './components/home-proveedor/home-proveedor.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'edit-product/:id', component: CreateProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'target-register', component: TargetRegisterComponent
  },
  {
    path: 'client-profile', component: ClientProfileComponent
  },

  {
    path: 'provider-profile', component: ProviderProfileComponent
  },
  {
    path: 'proveedor', component: HomeProveedorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
