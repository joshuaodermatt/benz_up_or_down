import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) {}

  SignIn(email:string, password:string){
    this.angularFireAuth.signInWithEmailAndPassword(email, password).then(r => {
      console.log(r);
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
}
