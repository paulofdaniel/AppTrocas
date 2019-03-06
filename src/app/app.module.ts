import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SwingModule } from 'angular2-swing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardsComponent } from '../components/cards/cards';
import { ButtonsComponent } from '../components/buttons/buttons';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CardsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SwingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
