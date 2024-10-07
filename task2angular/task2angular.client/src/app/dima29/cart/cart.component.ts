import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  ngOnInit() {

    this.getCartITems();
  }
  constructor(private _ser: ServicesUrlService) {


  }
Array: any
  getCartITems() {
    this._ser.cartItemObser.subscribe((data) => {
      this.Array = data
     
    })

  }
  increament(id: any) {
    this._ser.increaseQuantity(id);

  }
  decremeant(id: any) {
    this._ser.decreaseQuantity(id);

  }


}
