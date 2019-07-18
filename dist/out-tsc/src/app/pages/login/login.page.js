import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: new FormControl(),
            password: new FormControl(),
        });
    };
    LoginPage.prototype.tryLogin = function (value) {
        var _this = this;
        if (!value || !value.email) {
            return;
        }
        this.authService.doLogin(value)
            .then(function (res) {
            console.log(res);
            _this.navCtrl.navigateForward("/home");
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginPage.prototype.goRegisterPage = function () {
        this.navCtrl.navigateForward("/register");
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            AuthService,
            FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map