import { Component } from '@angular/core';
import { Item } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cart: Item[] = [];

  addItem(item: Item) {
    let bContain = false

    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].description == item.description) {
        bContain = true;
        this.cart[i].quantity++
      }
    }
    if (bContain == false) {
      let newItem = {
        description: item.description,
        quantity: 1,
        imageUrl: item.imageUrl
      }
      this.cart.push(newItem)
    }

    // console.info(">>> cart: ", this.cart)
  }

  deleteItem(item: Item) {
    this.cart.splice(0,1)
  }

}
