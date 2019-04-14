import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MenuItem} from './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

 //Serve para enviar o elemento menuItem clicado para o componentParent que no caso é o menu
 // Lá esse menuItem será recebido através de (add)="shoppingCart.addItem($event)" que irá executar o codigo interno:
 // hoppingCart.addItem($event) passado para o shoppingCart o menuItem em $event
 // onde ele será adicionado no carrinho de compras, que está armazenado no ShoppingCartService
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
