import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../product/product.model'
import { AuthServiceProvider } from '../auth-service/auth-service';
//import { List } from 'ionic-angular';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  public locationId: number = 1;

  public likes: string[] = ["0fds5466af54f","j8h6g5dr9ss"];
  public disLikes: string[] = ["0fds5466af54f","j8h6g5dr9ss"];
  public matches: string[] = ["0fds5466af54f","j8h6g5dr9ss"];

  constructor(public http: HttpClient, public firestore: AngularFirestore, private auth:
    AuthServiceProvider) {
  }

  addProduct(name:string, platform:string, genre:string, description:string, status:string, imgUrl:any[], exchangeFor:boolean[]): Promise<void> {
    
    let id = this.firestore.createId();

    let product = {
      "id": id,
      "userEmail": this.auth.getEmail(),
      "locationId": 1,
      "date": new Date().toISOString(),
      "name": name,
      "platform": platform,
      "genre": genre,
      "description": description,
      "status": status,
      "images": Object.assign({}, imgUrl),
      "exchangeFor": Object.assign({}, exchangeFor),
      "likes": Object.assign({}, this.likes),
      "disLikes": Object.assign({}, this.likes),
      "matches": Object.assign({}, this.matches)
    }
    return this.firestore.doc<Product>(`products/${id}`).set(product);
    
  }

  getProductList(): AngularFirestoreCollection<Product> {    
    return this.firestore.collection(`products`, ref => ref.where(
      'locationId', '==', this.locationId).limit(20).orderBy('date', "desc")
    ); 
  }

  getMyProductList(): AngularFirestoreCollection<Product> {    
    return this.firestore.collection(`products`, ref => ref.where(
      'userEmail', '==', this.auth.getEmail()).orderBy('date', "desc")
    ); 
  }
}