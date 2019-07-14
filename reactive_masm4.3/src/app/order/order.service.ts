import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "app/order/order.model";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map'
import { HttpClient } from "@angular/common/http";

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

//poderia ser Observable<Order> no retorno do método
//mas através do map .map(order => order.id)  eu dou o nome para o retorno de order
//e acesso a propiedade id dele
  checkOrder(order: Order): Observable<string>{
    return this.http.post<Order>(`${MEAT_API}/orders`,order)
                          .map(order => order.id)
  }

}
