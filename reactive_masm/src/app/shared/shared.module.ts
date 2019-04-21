
import { NgModule } from "@angular/core";
//modulo que tem a diretivas basicas, no modulo raiz ele é importado indiretamente pelo BrowserModule
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import {RatingComponent} from './rating/rating.component'

@NgModule({

  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [ CommonModule, FormsModule,
  ReactiveFormsModule],
  exports: [InputComponent, RadioComponent,
    RatingComponent, CommonModule,
    FormsModule, ReactiveFormsModule]
})

export class SharedModule {}
