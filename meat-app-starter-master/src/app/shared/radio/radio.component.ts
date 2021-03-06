import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from "app/shared/radio/radio-option.model";
// necessários para tornar esse novo componente, como um componet de ngModel
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})

//ControlValueAccessor permitir que o formulario tenha acesso ao controle do valor do componente
export class RadioComponent implements OnInit, ControlValueAccessor {

  //  Quem estiver usando o meu componente de fora irá conseguir passar um valor
  @Input() options: RadioOption[]

  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  /**
   * Write a new value to the element.
   */
  writeValue(obj: any): void {
    this.value = obj
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void{
    this.onChange = fn
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void{

  }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void{}

}
