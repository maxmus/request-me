import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from "../app/services/auth.service";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.auth.afAuth.authState
      .subscribe(
        user => {
          if(user){
            this.navCtrl.navigateForward("/home");
            console.log("User authetnicated");
          }
          else
          {
            this.navCtrl.navigateForward("/login");
            console.log("User not authetnicated");
          }
        },
        () => {
          console.log("Error happen! User not authetnicated");
          this.navCtrl.navigateForward("/login");
        }
      )
  }
}
