import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards'

@Component({
  selector: 'buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsComponent {
  
  numberOfCards = CardsComponent;

  constructor() {
    console.log(this.numberOfCards)
  }

}
