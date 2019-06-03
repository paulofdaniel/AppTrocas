import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductRegisterPage } from '../../pages/product-register/product-register';
import { ProductProvider } from '../../providers/product/product';

/**
 * Generated class for the ProductSelectorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-selector',
  templateUrl: 'product-selector.html'
})
export class ProductSelectorComponent {

  name: string;
  modalAberta: boolean = false;
  meusItens: Array<any>;
  selectedItems: number = 0;

  constructor(public navCtrl: NavController, private productProvider: ProductProvider) {
    this.meusItens = [
      {id: 0, name: ''}
    ];
  }

  toggleModal(){
      this.modalAberta? this.modalAberta = false : this.modalAberta = true;
  }

  select(id: number){
    if(this.meusItens.find(x => x.id == id).selected == true){
      this.meusItens.find(x => x.id == id).selected = false;
    }else{
      this.meusItens.find(x => x.id == id).selected = true;
    }
    this.selectedName();
  }

  edit(id: number){
    console.log(id)
    event.stopPropagation();
  }

  selectedName() {
    this.selectedItems = 0;
    for(var i=0; i< this.meusItens.length; i++){
      if(this.meusItens[i].selected == true){
        this.selectedItems++;
        this.name = this.meusItens[i].name;
      }
    }
    if(this.selectedItems>1){
      this.name = "Vários selecionados"
    }
  }

  newItem(){
    this.navCtrl.push(ProductRegisterPage,{});
  }

  ngOnInit(){
    this.selectedName();
    this.productProvider.getProductList().valueChanges().subscribe(
      data => {
        this.meusItens = data;
      }
    )
  }
}
