import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from "./pages/landing/landing.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {LoginRegisterComponent} from "./pages/login-register/login-register.component";
import {LoggedInGuard} from "./guards/logged-in.guard";
import {LoggedOutGuard} from "./guards/logged-out.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent, pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard], pathMatch: 'full'},
  {path: 'detail', component: DetailComponent, canActivate: [LoggedInGuard], pathMatch: 'full'},
  {path: 'login', component: LoginRegisterComponent, canActivate: [LoggedOutGuard], pathMatch: 'full'},
  {path: 'register', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
