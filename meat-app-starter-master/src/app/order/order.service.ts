import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "app/order/order.model";
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map'
import { Http, Headers, RequestOptions } from "@angular/http";

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http){}

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
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    //stringify transformando numa string texto,
    //RequestOptions sentando na request o header
    //map pegando apenas o conteudo do response de retorno
    return this.http.post(`${MEAT_API}/orders`,
                          JSON.stringify(order),
                          new RequestOptions({headers: headers}))
                          .map(response => response.json())
                          .map(order => order.id)
  }

}
