import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonJsonProvider {

  url = 'http://localhost:3000/persons';

  constructor(public http: HttpClient) {
  }

  save (person: Person) : Observable<Object>{
    return this.http.post(this.url, person);
  }

  allPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  put (person: Person) : Observable<Object>{
    return this.http.put(this.url + '/' + person.id, person);
  }

}
