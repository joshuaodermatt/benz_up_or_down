import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {validateEmail} from "../../helpers/helpers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() hasError = false;

  @Output() register = new EventEmitter<any>();
  @Output() toLogin = new EventEmitter<boolean>();

  registerFormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerFormGroup = this.formBuilder.group({
      email: ['', {validators: [Validators.required, validateEmail]}],
      password: ['', {validators: [Validators.required, Validators.min(8)]}],
    })
  }

  get email() {
    return this.registerFormGroup.get('email');
  }

  get password() {
    return this.registerFormGroup.get('password');
  }

  ngOnInit(): void {
  }

  emitRegistration(): void {
    const registerData = {
      email: this.email?.value,
      password: this.password?.value
    };
    this.register.emit(registerData);
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

  emitToLogin() {
    this.toLogin.emit(true);
  }
}
