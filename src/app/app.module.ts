import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { InteractPage } from '../pages/interact/interact';
// import { SwapiProvider } from '../providers/swapi/swapi';

import { SWapi } from '../providers/swapi/swapi';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InteractPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InteractPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SWapi
  ]
})
export class AppModule {}
