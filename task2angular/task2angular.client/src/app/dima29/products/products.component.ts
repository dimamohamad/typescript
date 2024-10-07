import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  ngOnInit() {

    this.getproduct();
  }
  constructor(private _ser: ServicesUrlService) {


  }

  productArray: any
  getproduct() {
    this._ser.getproducts().subscribe((data) => {
      this.productArray = data
      console.log(this.productArray, "this.servicesArray")
    })

  }

  object = {
    cartItem: 0,
    productId: 0,
    userId: 0,
    quantity:0




  }

  addtoCart(productId: any) {
    this.object.productId = productId;


    this._ser.addTocart({... this.object });

  }


}
