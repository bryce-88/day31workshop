import { Component, Input, Output } from '@angular/core';
import { Item } from '../model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @Input()
  cart: Item[] = [];

  @Output()
  onDeleteItem = new Subject<Item>();

  deleteItem(item: Item) {
    this.onDeleteItem.next(item);
  }


}
