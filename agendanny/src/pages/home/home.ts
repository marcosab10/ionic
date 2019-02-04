import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {
    let person1 = {
      nome: 'Marcos',
      url: 'marcosab10@yahoo.com.br',
      contact: {
        phone:'996439112',
        email:'marcosab10@yahoo.com.br',
        type:'Morno',
        dateNextContact: new Date().toISOString(),
        comentary:'Ligar quando chegar a data combinada'
      }
    }

    let person2 = {
      nome: 'Jhennifer',
      url: 'jhennifer@gmail.com',
      contact: {
        phone:null,
        email:'jhennifer@gmail.com',
        type:'Frio',
        dateNextContact: new Date().toISOString(),
        comentary:'Falar sobre a indicação'
      }
    }

    this.persons.push(person1);
    this.persons.push(person2);
  }

  callContact(contact: any){
    console.log('contato é: ' + contact.phone);
    this.callNumber.callNumber(contact.phone, true);
  }


}
