import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {

  constructor(private storage: Storage) {
  }

  async save (person: Person) : Promise<any>{
    let persons: Array<Person> = await this.allPersons();

    if (!persons) {
      persons = new Array<Person>(0);
    }

    if(!person.hash){
      person.hash = this.hash(person.nome + person.contact.phone);
    }
    persons = this.remove(person, persons);

    persons.push(person);
    return this.storage.set('persons', persons);
  }

  async allPersons(): Promise<Array<Person>>{
    return this.storage.get('persons');
  }

//Está retornando um Array filtrado onde o elemento do hash passado é retirado !=
  remove(person: Person,  persons: Array<Person>) : Array<Person> {
    return persons.filter((p: Person) => p.hash != person.hash);
  }

  hash(str: String): string {
    let hash = 0;
    if(str.length == 0) return '' + hash;
    for (let i: number = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return '' + hash;
  }

}
