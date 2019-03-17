import {Routes} from '@angular/router'
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantsComponent } from "app/restaurants/restaurants.component";
import { RestaurantDetailComponent } from "app/restaurant-detail/restaurant-detail.component";


export const ROUTES: Routes = [
 {path: '', component: HomeComponent },
 {path: 'about', component: AboutComponent },
 {path: 'restaurants', component: RestaurantsComponent },
 {path: 'restaurants/:id', component: RestaurantDetailComponent }
]
