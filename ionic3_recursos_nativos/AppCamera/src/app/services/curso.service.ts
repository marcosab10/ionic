import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  lista: any[];
  chave:string = "cursos"

  constructor(private storage: Storage) {
// () => {} método sem nome no javascript
    this.storage.ready().then( () => {
      this.storage.get(this.chave).then((registros) => {

        if(registros){
          this.lista = registros;
        }else{
          this.lista = [];
        }
      });
    });
  }

  listar(){
    return this.lista;
  }

  adicionar(registro:any){
    this.storage.ready().then( () => {
      this.lista.push(registro);
      this.storage.set(this.chave, this.lista);
    });
  }

  atualizar(curso,dados){
    for(let chave in this.lista){
      if(this.lista[chave] == curso){
          this.lista[chave] = dados;
          this.storage.set(this.chave, this.lista);
      }
    }
  }

  deletar(curso){
    for(let chave in this.lista){
      if(this.lista[chave] == curso){
          this.lista.splice(parseInt(chave),1);
          this.storage.set(this.chave, this.lista);
      }
    }
  }


}
