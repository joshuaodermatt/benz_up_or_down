import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import {DetailComponent} from "./pages/detail/detail.component";
import { WatchlistComponent } from './components/watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    LandingComponent,
    LoginRegisterComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
