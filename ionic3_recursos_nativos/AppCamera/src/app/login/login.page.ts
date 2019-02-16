import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { TouchID } from '@ionic-native/touch-id/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg:string;

  constructor(public navCtrl: NavController, private touchId: TouchID) { }

  ngOnInit() {
  }

  login(){

    this.touchId.isAvailable()
      .then(
        res => {
          this.touchId.verifyFingerprint('Entrar no sistema')
            .then(
              res => this.navCtrl.navigateRoot('/home'),
              err => this.msg = "Erro no login"
            );
        },
        err => this.msg = "Não existe esse reciurso"
      );



    //  this.navCtrl.navigateForward('/home');
    //  this.navCtrl.navigateBack('/home');
  }

}
