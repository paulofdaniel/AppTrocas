import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from "../../providers/product/product"

/**
 * Generated class for the ProductRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-register',
  templateUrl: 'product-register.html',
})
export class ProductRegisterPage {

  name: string = "";
  platform: string = "";
  genre: string = "";
  description: string = "";
  status: string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public productProvider: ProductProvider) {
  }

  cadastraProduto(){
    this.productProvider.addProduct(this.name, this.platform, this.genre, this.description, this.status);
  }
  
}
