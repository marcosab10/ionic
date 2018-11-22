import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  public nome_obj:string = "Marcos Faria";
  public valor:number = 5;

  //CRIANDO UM ARRAY COM JSON
  public objeto_inicio = {
    titulo:"Marcos Faria",
    quant_likes:20,
    data:"22 de Novembro de 2018",
    descricao:"Desenvolvimento mobile com IONIC usando html, css, javascript, json, angular e outras linguagens!",
    quant_comments:5,
    hora_coment:"10h atrás" 
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
