import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} './menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem

  constructor() { }

  ngOnInit() {
  }

}
