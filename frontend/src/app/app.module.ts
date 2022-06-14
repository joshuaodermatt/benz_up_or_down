import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore/";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

const firebaseConfig = {
  apiKey: "AIzaSyBdStC6mvwHHqGI29NRLWlxuUoxfWYuQE8",
  authDomain: "upordown-af2e8.firebaseapp.com",
  projectId: "upordown-af2e8",
  storageBucket: "upordown-af2e8.appspot.com",
  messagingSenderId: "226123054066",
  appId: "1:226123054066:web:cc5e87073970aac609c96b",
  measurementId: "G-VSVTDYG922"
};
import {DetailComponent} from "./pages/detail/detail.component";
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    RegisterComponent,
    NavComponent,
    LandingComponent,
    LoginRegisterComponent,
    WatchlistComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    LottieModule.forRoot({ player: playerFactory }),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
