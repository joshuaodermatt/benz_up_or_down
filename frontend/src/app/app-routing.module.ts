import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {LoginRegisterComponent} from "./pages/login-register/login-register.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent, pathMatch: 'full'},
  {path: 'detail', component: DetailComponent, pathMatch: 'full'},
  {path: 'auth', component: LoginRegisterComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
