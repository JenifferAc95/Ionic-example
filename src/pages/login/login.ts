import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: { username?: string, password?: string } = {};
  submited: boolean = false;

  constructor(public navCtrl: NavController,
    private AuthService: AuthProvider,
    private alertCtrl: AlertController) { }

  onLogin(form) {
    this.submited = true;
    if (form.valid) {
      this.AuthService.login(this.login).subscribe(() => {
        if (this.AuthService.isLoggedIn) {
          console.log("You are logged in");
          this.navCtrl.push(TabsPage);

        } else {
          console.log("Wrong credentials");
          this._badCredentials();
        }
      });
    }
  }

  private _badCredentials() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Bad credentials :(',
      buttons: [
        {
          text: 'Ok',
          handler: data => {
            this.login.username = "";
            this.login.password = "";
          }
        }
      ]
    });

    alert.present();
  }
}
