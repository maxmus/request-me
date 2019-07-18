import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  
  constructor( public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
    this.errorMessage = "";
  }
  tryLogin(value){
    if(!value || !value.email){
      return;
    }
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.navCtrl.navigateForward("/home");
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  goRegisterPage(){
    this.navCtrl.navigateForward("/register");
  }
}
