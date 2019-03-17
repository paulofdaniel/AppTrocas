import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
import { ProductPage } from '../../pages/product/product';


@Component({
  selector: 'cards',
  templateUrl: 'cards.html'
})
export class CardsComponent {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;

  NumberOfCards() {
    return this.cards.length;
  }

  constructor(public navCtrl: NavController) {

    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      throwOutDistance: (d) => {
        return 500;
      }
    }

    this.cards = [
      {name: 'Spider-Man PS4', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', images: [{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'}]},
      {name: 'Red Dead Redemption 2', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', images: [{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'}]},
      {name: 'Beyond Two Souls', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', images: [{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'}]},
      {name: 'Spider-Man PS4', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', images: [{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'},{url:'https://img.olx.com.br/images/46/464919016249066.jpg'}]},
      {name: 'Red Dead Redemption 2', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', images: [{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'},{url:'https://img.olx.com.br/images/57/579902020989761.jpg'}]},
      {name: 'Beyond Two Souls', description: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ', images: [{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'},{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'}]} 
    ];

  }

  public growBg(){
    let bgClass: HTMLElement = document.querySelector(".bg-fluid");
    bgClass.style.backgroundSize = "200%"
  }

  public throwCard(decision){
    var direction;
    decision == "want" ? direction = 1 : direction = -1;
    this.swingCards.last.getCard().throwOut(direction,0);
  }

  ngAfterViewInit() {
    this.swingStack.throwout.subscribe(
      (event: ThrowEvent) => {
        this.cards = this.cards.slice(0, -1);
        if(this.cards.length == 0){
          this.growBg();
        }
      });
  }
  
  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    
  }

  openProductDetail(item){
    this.navCtrl.push(ProductPage,{"item":item});
  }

}
