import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { PersonProvider } from '../../providers/person.provider';
import { EditPersonPage } from '../edit-person/edit-person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController,
              private callNumber: CallNumber,
              private personProvide: PersonProvider) {
  }

// No angular puro, na class implements OnInit
//  ngOnInit(): void {
//    this.personProvide.allPersons()
//      .then((persons : Array<Person>) => this.persons = this.persons);
//  }

  ionViewWillEnter() {
    this.personProvide.allPersons()
         .then((persons : Array<Person>) => this.persons = persons);
  }

  callContact(contact: any){
    console.log('contato é: ' + contact.phone);
    this.callNumber.callNumber(contact.phone, true);
  }

// Abriu um objeto javascript {}, deu um nome para ele e passou o valor {'person' : person}
  editPerson(person: Person){
    this.navCtrl.push(EditPersonPage, {'person' : person});
  }


}
