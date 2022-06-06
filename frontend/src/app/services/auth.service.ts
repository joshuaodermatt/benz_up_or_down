import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {}

  SignIn(email:string, password:string){
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(r => {
      console.log('Nice, it worked!');
    })
      .catch(err => {
        console.log('Something went wrong: ', err.message);
      })
  }

  SignOut(){
    this.angularFireAuth.signOut().then(r => {
      console.log(r);
    })
  }

  Register(email:string, password:string){
    this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(r => {
      console.log(r);
    })
  }

  GetUserId(){
    this.angularFireAuth.onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
      } else {
        // User not logged in or has just logged out.
      }
    });
  }
}
