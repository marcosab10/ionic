import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmeProvider {
  //Ex: https://api.themoviedb.org/3/movie/latest?api_key=dcc2ba2f4fe48422bccf03650bd7e13c
  private chaveAPI = "dcc2ba2f4fe48422bccf03650bd7e13c";
  private urlAPI = "https://api.themoviedb.org/3";
  private requisicao = "/movie/popular";

  constructor(public http: HttpClient) {
    console.log('Hello FilmeProvider Provider');
  }


  pegarUltimoFilme(){
    return this.http.get(this.urlAPI + this.requisicao + "?api_key=" + this.chaveAPI)
  }

}
