import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginData} from "../../models/models";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {validateEmail} from "../../helpers/helpers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() hasError = false;
  @Input() loggedIn = false;

  @Output() login = new EventEmitter<any>();
  @Output() toRegister = new EventEmitter<boolean>();

  loginFormGroup;
  usedLogin = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', {validators: [Validators.required, validateEmail]}],
      password: ['', {validators: [Validators.required, Validators.min(8)]}],
    });
  }

  get email() {
    return this.loginFormGroup.get('email');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  ngOnInit(): void {
  }

  emitLogin(): void {
    this.usedLogin = true;
    const loginData = {
      email: this.email?.value,
      password: this.password?.value
    };
    this.login.emit(loginData);
  }

  hasEmailErrors() {
    return this.email?.errors !== null;
  }

  isEmailUsed() {
    return this.email?.dirty && this.email?.touched;
  }

  hasPasswordErrors() {
    return this.password?.errors !== null;
  }

  isPasswordUsed() {
    return this.password?.dirty && this.password?.touched;
  }

  emitToRegistration() {
    this.toRegister.emit(true);
  }

  hasUsedLogIn() {
    return this.usedLogin;
  }
}
