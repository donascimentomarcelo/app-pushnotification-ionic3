import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public oneSignal: OneSignal) {
    platform.ready().then(() => {

     this.oneSignal.startInit("AppId (OneSignal)", "Google project number (Firebase)")
                   .sendTag('email', 'marcelo@gmail.com')
    
     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

     this.oneSignal.getIds()
       .then((ids) => {
              console.log('getIds: ' + JSON.stringify(ids));
     });

     this.oneSignal.handleNotificationOpened().subscribe(() => {
      console.log('ok');
      
    });
  
    this.oneSignal.endInit();

    statusBar.styleDefault();
    splashScreen.hide();
    });
  }
}

