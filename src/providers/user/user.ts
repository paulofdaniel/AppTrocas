import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../user/user.model'
import { AuthServiceProvider } from '../auth-service/auth-service';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, public firestore: AngularFirestore, private auth:
    AuthServiceProvider) {
  }

  email:string = this.auth.getEmail()
  chats:string[] = ["dsdsd","dfsdfs"]
  rate:number = 0;

  getUser(): AngularFirestoreCollection<User> {    
    return this.firestore.collection(`users`, ref => ref.where(
      'email', '==', this.email).limit(1)
    ); 
  }

  newUser(name:string, locationId:number, stateId: number): Promise<void> {

    let user = {
      "email": this.email,
      "name": name,
      "locationId": locationId,
      "stateId": stateId,
      "rate": 0,
      "chats": {},
    }

    return this.firestore.doc<User>(`users/${this.email}`).set(user);
  }

  updateUser(name:string, locationId:number, stateId: number): Promise<void> {
    return this.firestore.doc<User>(`users/${this.email}`).update({"name":name,"locationId":locationId, "stateId":stateId});
  }

}
