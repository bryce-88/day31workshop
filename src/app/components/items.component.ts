import { Component, Output } from '@angular/core';
import { Item } from '../model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Output()
  onAddItem = new Subject<Item>();

  items: Item[] = [
    { description: 'electric kettle', quantity: 0, imageUrl: '/assets/images/item1.png' },
    { description: 'pan', quantity: 0, imageUrl: '/assets/images/item2.png' },
    { description: 'plate', quantity: 0, imageUrl: '/assets/images/item3.png' },
    { description: 'sponge', quantity: 0, imageUrl: '/assets/images/item4.png' }
  ]

  addItem(item: Item): void {
    console.info(">>> Added item")
    this.onAddItem.next(item);
  }
}
