import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  email: string = '';
  password:string = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  SignIn(){
    this.authService.SignIn(this.email,this.password);
  }

}
