import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';

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
  providers:[
    FilmeProvider
  ]
})



export class InicioPage {
  public lista_filmes = new Array<any>();
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private filmeProvider: FilmeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    this.filmeProvider.pegarUltimoFilme().subscribe(
      data=>{
        const response = (data as any);
        const obj_retorno = JSON.parse(response._body)
        //console.log(obj_retorno);
        this.lista_filmes = obj_retorno.results;
      },
      error=>{
        console.log(error);
      }

    )


  }

}
