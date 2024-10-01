import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';

@Component({
  selector: 'app-subsicription',
  templateUrl: './subsicription.component.html',
  styleUrl: './subsicription.component.css'
})
export class SubsicriptionComponent {
  ngOnInit() { this.getSub() }
  constructor(private _ser: ServicesUrlService) {
  }



  subscriptionArray: any
  getSub() {
    this._ser.getSubScription().subscribe((data) => {

      this.subscriptionArray = data
    })
  }


  private getFromLS() {
    return Number(localStorage.getItem("SubServiceId"))
  }

  data = {
    "id": 1,
    "subscriptionId":0,
    "subServiceId": this.getFromLS,
  };
  addUserSubscription(id:any) {

    this.data.subscriptionId = id
    this._ser.addUserSubscription(this.data).subscribe(() => {
             alert("Your subscribe have been add successfully")
    })
  }
}
