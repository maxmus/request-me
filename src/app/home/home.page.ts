import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController, public authService: AuthService) {}

  logout(){
    console.log("Logut");
    this.authService.doLogout();
    this.navCtrl.navigateForward("/login");
  }
}
