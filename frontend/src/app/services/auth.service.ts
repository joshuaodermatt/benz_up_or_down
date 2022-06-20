import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    {email: 'test@gmail.com', password: '12345678'},
    {email: 'moritzwicki09@gmail.com', password: 'moritzWicki'},
    {email: 'erinbachmann@gmail.com', password: 'erinBachmann'},
    {email: 'joshuaodermatt@gmail.com', password: 'joshuaOdermatt'},
  ];

  constructor(private router:Router) {
  }

  SignIn(email: string, password: string): boolean {
    for (const user of this.users) {
      if (user.email === email && user.password === password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', email);
        return true;
      }
    }
    localStorage.setItem('isLoggedIn', 'false');
    return false;
  }

  SignOut() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/home');
  }

  Register(email: string, password: string): boolean {
    for (const user of this.users) {
      if (user.email === email) {
        return false;
      }
    }
    this.users.push({email: email, password: password});
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('email', email);
    return true;

  }

  isSignedIn() {
      return localStorage.getItem('isLoggedIn') === 'true';
  }
}
