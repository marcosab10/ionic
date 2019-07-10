import { Component, OnInit } from '@angular/core';
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

// para tratamneto de erros:
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style ({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style ({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  restaurants: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantService: RestaurantsService,
              private fb: FormBuilder) { }

// O restaurants que está vindo no retorno é o nome do array json onde estão os valores
  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
        searchControl: this.searchControl

    })

// O form control tem um observable que fica escutado mudanças no campo associado
// Aqui eu vou me inscrever no observable this.searchControl.valueChanges.subscribe()
// Mas para não ficar um subscribe despois outro do serviço, uso o switchMap
// para fazer a troca do observable na hora da volta
    this.searchControl.valueChanges
    .debounceTime(500) // eventos que esperem 500 milisegundos
    .distinctUntilChanged()// diferente da ultima pesquisa
  //  .do(searchTerm => console.log(`q=${searchTerm}`))
    .switchMap(searchTerm =>
      this.restaurantService.restaurants(searchTerm)
      .catch(error => Observable.from([]))) // não deixa a exceção propagar para o valueChanges, quebrando seu funcionamento
    .subscribe(restaurants => this.restaurants = restaurants)


    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
