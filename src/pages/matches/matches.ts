import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';


/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {

  matches: Array<any>;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.matches = [
      {name: 'Spider-Man PS4', lastMSG: "11:27 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis auctor orci.",images: [{url:'https://img.olx.com.br/images/46/464919016249066.jpg'}]},
      {name: 'Red Dead Redemption 2', lastMSG: "9:16 - Ut molestie libero vel dui pulvinar, nec tempor elit cursus. Praesent feugiat nibh quis nisl tempus, a ullamcorper purus suscipit.",  images: [{url:'https://img.olx.com.br/images/57/579902020989761.jpg'}]},
      {name: 'Beyond Two Souls', lastMSG: "Ontem - Nam feugiat neque ac pharetra sollicitudin. Morbi et pellentesque dolor.", images: [{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'}]},
      {name: 'Spider-Man PS4', lastMSG: "Ontem - Donec id sem urna.", images: [{url:'https://img.olx.com.br/images/46/464919016249066.jpg'}]},
      {name: 'Red Dead Redemption 2', lastMSG: "7 dias atrás - Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", images: [{url:'https://img.olx.com.br/images/57/579902020989761.jpg'}]},
      {name: 'Beyond Two Souls', lastMSG: "Último mês - Aliquam eget ex orci. Nulla laoreet, nunc non faucibus molestie, odio est porttitor nunc, et pulvinar felis enim in lacus.", images: [{url:'https://img.olx.com.br/thumbs256x256/32/328905014799748.jpg'}]},
    ];
  }

  openChat(){
    this.navCtrl.push(ChatPage,{});
  }

}
