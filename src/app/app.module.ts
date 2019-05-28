import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SwingModule } from 'angular2-swing';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductPage } from '../pages/product/product';
import { LoginPage } from '../pages/login/login';
import { ProductRegisterPage } from '../pages/product-register/product-register';
import { ChatPage } from '../pages/chat/chat';
import { MatchesPage } from '../pages/matches/matches';
import { OptionsPage } from '../pages/options/options';

import { CardsComponent } from '../components/cards/cards';
import { ProductSelectorComponent } from '../components/product-selector/product-selector';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ProductProvider } from '../providers/product/product';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardsComponent,
    ProductSelectorComponent,
    ProductPage,
    LoginPage,
    ProductRegisterPage,
    MatchesPage,
    ChatPage,
    OptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SwingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProductPage,
    LoginPage,
    ProductRegisterPage,
    MatchesPage,
    ChatPage,
    OptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthServiceProvider,
    ProductProvider
  ]
})
export class AppModule {}
