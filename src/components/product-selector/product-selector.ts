import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductRegisterPage } from '../../pages/product-register/product-register';

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

  constructor(public navCtrl: NavController) {
    this.meusItens = [
      {id: 0, name: 'Spider-Man PS4', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', selected: false, images: [{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'}]},
      {id: 1, name: 'Red Dead Redemption 2 Nome Gigante', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', selected: true, images: [{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'}]},
      {id: 2, name: 'Beyond Two Souls', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', selected: false, images: [{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'}]},
      {id: 3, name: 'Spider-Man PS4', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', selected: false, images: [{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'}]},
      {id: 4, name: 'Red Dead Redemption 2', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', selected: false, images: [{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'}]},
      {id: 5, name: 'Beyond Two Souls', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', selected: false, images: [{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'}]} 
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
  }
}
