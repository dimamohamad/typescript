import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  paramter: any

  ngOnInit() {
    this.paramter = this._route.snapshot.paramMap.get('id');
    console.log("paramter", this.paramter)
    this.getSubSerById(this.paramter)
  }

  constructor(private _ser: ServicesUrlService, private _route: ActivatedRoute) { }

  SubServicesDetailsArray: any

  getSubSerById(id: number) {
    this._ser.getSubSerById(id).subscribe((data) => {
      this.SubServicesDetailsArray = data
    })
  }


  goToSubscription(id: string) {
    debugger
    localStorage.setItem("SubServiceId", id)
  }






}
