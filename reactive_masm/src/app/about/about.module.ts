import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './about.component';

const ROUTES: Routes = [
  {path: '', component: AboutComponent }
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule, RouterModule.forChild(ROUTES)],
  providers: [],
  //usa exports quando vc quer usar o componente em outro modulo
  exports:[]
})
export class AboutModule { }
