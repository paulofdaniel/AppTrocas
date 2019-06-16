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
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProductProvider } from '../../providers/product/product';


@Component({
  selector: 'cards',
  templateUrl: 'cards.html'
})
export class CardsComponent {

  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  @Output() matchedEvent = new EventEmitter<string>();

  cards: any = [];
  stackConfig: StackConfig;
  userEmail = this.auth.getEmail();
  ignoredArray: string[] = [""];
  selectedCard;

  NumberOfCards() {
    return this.cards.length;
  }

  constructor(public navCtrl: NavController, private productProvider: ProductProvider, public auth: AuthServiceProvider) {

    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
        
      },
      throwOutDistance: (d) => {
        return 500;
      }
    }
  }

  public growBg(){
    let bgClass: HTMLElement = document.querySelector(".bg-fluid");
    bgClass.style.backgroundSize = "300%"
    bgClass.style.height = "100vh"
  }

  public reduceBg(){
    let bgClass: HTMLElement = document.querySelector(".bg-fluid");
    bgClass.style.backgroundSize = "100%"
    bgClass.style.height = "100%"
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
    var subs = this.productProvider.getMyProductList().valueChanges().subscribe(
      data => {
        data.forEach(e=>{
          if(e.selected){
            this.selectedCard = e.id;
            var aux=[e]
            this.productProvider.selectProducts(aux, e.id)
          }
        })
        subs.unsubscribe()
      }   
    )
    this.productProvider.getMyProductList().valueChanges().subscribe(
      data => {
        this.getIgnoredArray();
      }   
    )
    
  }


  getIgnoredArray(){
    this.ignoredArray = [];
    this.productProvider.getMyProductList().valueChanges().subscribe(data=>{
      data.forEach(e=>{ 
        if(e.selected == true){
          var tempArray = e.likes;
          var result = Object.keys(tempArray).map(function(key) {
            return tempArray[key].toString();
          });
          var tempArray2 = e.disLikes;
          var result2 = Object.keys(tempArray2).map(function(key) {
            return tempArray2[key].toString();
          });

          this.ignoredArray = this.ignoredArray.concat(result,result2);
          this.loadCards(); 
        }
      })
    })
  }

  loadCards(){
    var unsubs = this.productProvider.getProductList().valueChanges().subscribe(
      data => {
        this.cards=[];
        data.forEach(e=>{
          if(e.userEmail != this.userEmail && !this.ignoredArray.includes(e.id)){
            this.cards.push(e)
          }
        });
        //unsubs.unsubscribe();
        //unsubs = null;

        const final = [ ];
        this.cards.map((f,i)=> !final.includes(f) && final.push(f))

        if(this.cards.length>0){
          this.reduceBg()
        }        

        this.cards = final;

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
    )
  }
  
  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {

    var cardID = event.target.className.split(" ")[1];

    if(event.throwDirection.toString() == "Symbol(RIGHT)"){
      this.productProvider.updateLikes(cardID)
    }else if(event.throwDirection.toString() == "Symbol(LEFT)"){
      this.productProvider.updateDislikes(cardID) 
    }
    this.productProvider.getSpecificItem(cardID).valueChanges().subscribe(
      data => {
        data.forEach(d=>{
          
          var tempArray = d.likes;
          var result:string[] = Object.keys(tempArray).map(function(key) {
            return tempArray[key].toString();
          });
          
          result.forEach(elem=>{
            if(elem == this.selectedCard){
              this.matchedEmmit()
            }
          })

        })
      })
  }

  matchedEmmit() {
    this.matchedEvent.emit();
  }

  openProductDetail(item){
    this.navCtrl.push(ProductPage,{"item":item});
  }
  

}
