import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  email: string = '';
  ngOnInit(): void {

    this._ser.emailaddress.subscribe((data) => {
      this.email=data
    })
  }

  logout() {
    this._ser.email.next('');
  }
  constructor(private _ser: ServicesUrlService ){
  }
}
