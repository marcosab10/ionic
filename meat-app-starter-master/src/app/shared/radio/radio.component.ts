import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from "app/shared/radio/radio-option.model";

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  //  Quem estiver usando o meu componente de fora irá conseguir passar um valor
  @Input() options: RadioOption[]

  value: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
  }

}
