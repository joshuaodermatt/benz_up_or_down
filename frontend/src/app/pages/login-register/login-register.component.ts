import { Component, OnInit } from '@angular/core';
import {LoginData} from "../../models/models";
import {AuthService} from "../../services/auth.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  isRegistered: boolean = true;
  loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginData: any) {
    this.loggedIn = this.authService.SignIn(loginData.email, loginData.password);
    if (this.loggedIn) {
      this.router.navigateByUrl('dashboard');
    }
  }

  register(registerData: any) {
    this.loggedIn = this.authService.Register(registerData.email, registerData.password);
    if (this.loggedIn) {
      this.router.navigateByUrl('dashboard');
    }
  }

  toLogin(toLogin: any) {
    this.isRegistered = toLogin;
  }

  toRegister(toLogin: any) {
    this.isRegistered = !toLogin;
  }
}
