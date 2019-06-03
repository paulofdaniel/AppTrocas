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
  exchangeFor: boolean[] = [false,false,false,false,false];

  public imagePath;
  imgURL: any[] = ["","","",""];
  imgCount: number = 0;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public productProvider: ProductProvider) {
  }



  saveNewProduct(){

    this.productProvider.addProduct(this.name, this.platform, this.genre,
                                    this.description, this.status,
                                    this.imgURL.filter(function (el) {
                                        return el != "";}),this.exchangeFor
                                    );
    this.navCtrl.pop();
  }

  imagePreview(files) {

    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL[this.imgCount] = reader.result; 
    }
    this.imgCount++;
    
  }

  removeImage(id: number){
    if(id == 1){
      this.imgURL[1] = this.imgURL[2];
      this.imgURL[2] = this.imgURL[3];
      this.imgURL[3] = "";
    }else if(id == 2){
      this.imgURL[2] = this.imgURL[3];
      this.imgURL[3] = "";
    }else if(id == 3){
      this.imgURL[3] = "";
    }
    this.imgCount--;
  }

  exchangeForCategory(cod: number){
    if(this.exchangeFor[cod] == false){
      this.exchangeFor[cod] = true;
    }else{
      this.exchangeFor[cod] = false;
    }    
  }
  
}
