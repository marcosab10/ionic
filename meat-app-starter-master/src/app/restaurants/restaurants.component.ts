import { Component, OnInit } from '@angular/core';
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { RestaurantsService } from "app/restaurants/restaurants.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantService: RestaurantsService) { }

// O restaurants que está vindo no retorno é o nome do array json onde estão os valores
  ngOnInit() {
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

}
