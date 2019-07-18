import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  
  constructor(public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
     .then(res => {
       this.errorMessage = "";
       this.successMessage = "Your account has been created. Please log in now.";
     }, err => {
       this.errorMessage = err.message;
       this.successMessage = "";
     })
  }
  goLoginPage(){
    this.navCtrl.navigateForward("/login");
  }
}
