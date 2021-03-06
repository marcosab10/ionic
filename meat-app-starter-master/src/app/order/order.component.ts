import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { RadioOption } from "app/shared/radio/radio-option.model";
import { OrderService } from "app/order/order.service";
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { Order, OrderItem } from "app/order/order.model";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //numa aplicação real estaria trazendo esse valor do backend
  delivery: number = 8

  paymentOptions: RadioOption[] =
  [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}

  ]

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  //Quando eu dou um subscribe é que realemnte irá fazer a requisição http
  // o que vai dentro do subscribe, é o que eu vou fazer quando obter o retorno da chamada
  checkOrder(order: Order){
    // Tenho uma lista de cartItems e vou tranformar em OrderItem =>
    order.orderItems = this.cartItems()
    .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
    .subscribe( (orderId: string) => {
      this.router.navigate(['order-summary'])
      //console.log(`Compra concluída: ${orderId}`)
      this.orderService.clear()

    })
    console.log(order)
  }

}
