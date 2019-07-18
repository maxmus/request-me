import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
//import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import { FirebaseUserModel } from './user.module';
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                var userModel = new FirebaseUserModel();
                if (user) {
                    if (user.providerData[0].providerId == 'password') {
                        //use a default image
                        userModel.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
                        userModel.name = user.displayName;
                        userModel.provider = user.providerData[0].providerId;
                        return resolve(userModel);
                    }
                    else {
                        userModel.image = user.photoURL;
                        userModel.name = user.displayName;
                        userModel.provider = user.providerData[0].providerId;
                        return resolve(userModel);
                    }
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map