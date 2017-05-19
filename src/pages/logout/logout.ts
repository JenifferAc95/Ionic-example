import { Component } from '@angular/core';
import { IonicPage, NavController, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController,
    public app: App,
    public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  confirmLogout() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm logout',
      subTitle: '¿Seguro que desea cerrar sesion?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log("No desea cerrar sesión");
          }
        }, {
          text: 'Yes',
          handler: () => {
            this._logout();
          }
        }
      ]
    });
    confirm.present();
  }

  private _logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

}
