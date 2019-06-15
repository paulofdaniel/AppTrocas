import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { HomePage } from '../home/home'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  signUp: boolean = false;
  loginEmail: string = "";
  loginPassword: string ="";
  signUpEmail: string = "";
  signUpPassword: string = "";
  loading: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthServiceProvider, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginOrSingUp(){
    this.signUp ? this.signUp = false : this.signUp = true;
  }

  login() {
    this.loading = true;

    let credentials = {
      email: this.loginEmail,
      password: this.loginPassword
    };
    this.auth.signInWithEmail(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      () => {
              this.presentToast("Login ou senha inválidos.", 3000);
              this.loading = false;
            }
    );
  }

  signUpUser() {
    let credentials = {
      email: this.signUpEmail,
      password: this.signUpPassword
      };
    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(HomePage),
      error => this.presentToast("Erro ao cadastrar.", 3000)
    );
  }

  loginWithGoogle() {
    this.auth.signInWithGoogle().then(
      () => this.navCtrl.setRoot(HomePage),
      () => this.presentToast("Erro ao entrar.", 3000)
    );
  } 

  presentToast(message: string, duration: number) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'top'
    });
    toast.present();
  }

  
}
