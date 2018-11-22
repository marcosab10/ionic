import { Component } from '@angular/core';

import { InicioPage } from '../inicio/inicio';
import { SlidePage } from '../slide/slide';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InicioPage;
  tab2Root = SlidePage;
  

  constructor() {

  }
}
