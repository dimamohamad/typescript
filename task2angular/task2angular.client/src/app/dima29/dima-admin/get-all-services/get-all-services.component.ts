import { Component } from '@angular/core';
import { ServicesUrlService } from '../../dimaUrl/services-url.service';

@Component({
  selector: 'app-get-all-services',
  templateUrl: './get-all-services.component.html',
  styleUrl: './get-all-services.component.css'
})
export class GetAllServicesComponent {
  ngOnInit() {

    this.getServicesAdmin();//start ponit of lifecycle of angular when we make a refresh or reload will go to ngonit
  }
  constructor(private _ser: ServicesUrlService) {


  }

  Array: any
  getServicesAdmin() {
    this._ser.getServices().subscribe((data) => {
      this.Array = data
      console.log(this.Array, "this.servicesArray")
    })

  }
}
