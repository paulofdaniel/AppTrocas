import { Component, ViewChild, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  Direction,
  StackConfig,
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
  @Output() matchedEvent = new EventEmitter<string>();

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
    bgClass.style.backgroundSize = "300%"
    bgClass.style.height = "100vh"
  }

  public throwCard(decision){
    var direction;
    decision == "want" ? direction = 1 : direction = -1;
    this.swingCards.last.getCard().throwOut(direction,0);
  }

  public changeCardColor(offset){
    const CARD: HTMLElement = document.querySelector(".card-container > div:last-child .card__overlay");
    const MORE_BUTTON: HTMLElement = document.querySelector(".card-container > div:last-child .card__more");

    if(offset>0){
      CARD.classList.add("card__overlay--green");
      CARD.classList.remove("card__overlay--red");
    }else if(offset<0){
      CARD.classList.add("card__overlay--red");
      CARD.classList.remove("card__overlay--green");
    }else{
      CARD.classList.remove("card__overlay--green");
      CARD.classList.remove("card__overlay--red");
    }
    let cardOpacity: number = Math.abs(offset)/280;
    CARD.style.opacity = cardOpacity.toString();
    MORE_BUTTON.style.opacity = (1-Math.abs(offset)/280).toString();
  }

  ngAfterViewInit() {
    this.swingStack.throwout.subscribe(
      (event: ThrowEvent) => {
        this.cards = this.cards.slice(0, -1);
        if(this.cards.length == 0){
          this.growBg();
        }
      });
      this.swingStack.throwin.subscribe(
        (event: DragEvent) => {
          this.changeCardColor(0);
      });
      this.swingStack.dragmove.subscribe(
        (event: DragEvent) => {
          this.changeCardColor(event.offset);
      }
    );
  }
  
  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    this.matchedTeste();
  }


  matchedTeste() {
    this.matchedEvent.emit();
  }

  openProductDetail(item){
    this.navCtrl.push(ProductPage,{"item":item});
  }
  

}
