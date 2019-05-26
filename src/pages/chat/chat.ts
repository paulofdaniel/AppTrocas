import { Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild('chatInput') chatInput;

  message: string = "";
  messages: Array<any>;
  more: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.messages = [
      {senderID: 1, message: 'Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! '},
      {senderID: 0, message: 'Toma um mé que o mundo vai girarzis! '},
      {senderID: 1, message: 'Nec orci ornare consequat. Praesent lacinia ultrices consectetur Sed non ipsum felis. Si u mundo tá muito paradis?'},
      {senderID: 0, message: 'Toma um mé que o mundo vai girarzis! '}
    ];
  }

  updateMessage(message){
    this.message = message;
  }
  sendMessage(input: any){
    if(this.message.trim() != ""){
      this.messages.push({senderID: 0, message: this.message});
      this.message = "";
      this.scrollToBottom();
      this.chatInput.setFocus();
    }
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  openMoreModal(){
    this.more ? false : true;
  }


}
