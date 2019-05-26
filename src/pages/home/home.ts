import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { MatchesPage } from '../matches/matches';
import { OptionsPage } from '../options/options';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  matched: boolean = false;
  matchedAnimation: boolean = false;
  bubblePopAnimation: boolean = false;
  bubbleValue: number = 9;
  
  constructor(public navCtrl: NavController) {

  }
  abreMatches(){
    this.navCtrl.push(MatchesPage,{});
  }
  abreOptions(){
    this.navCtrl.push(OptionsPage,{});
  }
  ionViewDidLoad() {
    //this.navCtrl.push(LoginPage,{});
  }
  showMatched(){
    this.matched = true;
  }
  closeMatched(){
    this.matchedAnimation = true;
    setTimeout( () => {
      this.matched = false;
      this.matchedAnimation = false;
      this.bubblePopAnimationCall();
    }, 500);
  }
  bubblePopAnimationCall(){
    this.bubblePopAnimation = true;
    this.bubbleIncrement();
    setTimeout(() => {
      this.bubblePopAnimation = false;
    }, 300);
  }

  bubbleIncrement(){
    this.bubbleValue++;
  }
}
