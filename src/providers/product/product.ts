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
  //public name: string = "Spider-Man";
  //public platform: string = "PS4";
  //public genre: string = "Action";
  //public description: string = "Pouco porco e mais aranha.";
  //public status: string = "Novinho";
  public images: string[] = ["abc.jpg", "123.png"];
  public exchangeFor: number[] = [2,3,5];
  public likes: string[] = ["0fds5466af54f","j8h6g5dr9ss"];
  public disLikes: string[] = ["0fds5466af54f","j8h6g5dr9ss"];
  public matches: string[] = ["0fds5466af54f","j8h6g5dr9ss"];

  constructor(public http: HttpClient, public firestore: AngularFirestore, private auth:
    AuthServiceProvider) {
    console.log('Hello ProductProvider Provider');
  }

  addProduct(name:string, platform:string, genre:string, description:string, status:string): Promise<void> {
    
    let id = this.firestore.createId();

    let product = {

      "userEmail": this.auth.getEmail(),
      "locationId": 1,
      "date": new Date().toISOString(),
      "name": name,
      "platform": platform,
      "genre": genre,
      "description": description,
      "status": status,
      "images": Object.assign({}, this.images),
      "exchangeFor": Object.assign({}, this.exchangeFor),
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
}