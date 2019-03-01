import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  previsao:any;
  cidade:string;

  constructor (private http: HTTP){

  }

  ionViewDidEnter(){
    console.log("Entrou na Página de clima");

    this.http.get('https://api.hgbrasil.com/weather/', {format:'json', woeid:'455903',locale:'en'}, {}).then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

      this.previsao = JSON.parse(data.data);

    }).catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });

  }

  buscarPorCidade(){
    console.log("Buscando");

    if(this.cidade == ''){
      this.cidade = 'Curitiba';
    }


    this.http.get('https://api.hgbrasil.com/weather/', {format:'json',locale:'en', city_name:this.cidade, key:'e401c371'}, {}).then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

      this.previsao = JSON.parse(data.data);

    }).catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });


  }

}
