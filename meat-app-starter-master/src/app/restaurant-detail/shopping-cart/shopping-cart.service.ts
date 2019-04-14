import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {
  items: CartItem[] = []
  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id )

    if(foundItem){
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }

  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1;
    if(item.quantity === 0){
      this.removeItem(item)
    }

  }

//localiza o indice e remove um elemento que é o proprio indice quando se passa 1
  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

// Usa o map para transformar o array de item em array de valor
// depois usa o reduce para somar todos os valores iniciando a soma de 0
  total(): number {
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev + value, 0)
  }

}
