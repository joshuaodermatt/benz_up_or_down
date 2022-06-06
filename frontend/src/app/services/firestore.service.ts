import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";




@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore:AngularFirestore,private angularFireAuth: AngularFireAuth) { }

  AddWebsite(url:string){
    this.angularFirestore.collection('Websites').add({
      URL: url,
      UserId: 'trest'
    })
  }
}
