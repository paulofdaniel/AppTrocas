import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  item: any;
  name: string;
  description: string;
  images: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("item");
    this.name = this.item.name;
    this.description = this.item.description;
    this.images = this.item.images;
  }

  ionViewDidLoad() {
    
  }

  back(){
    this.navCtrl.pop();
  }

}
