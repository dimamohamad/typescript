import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  ngOnInit() { }
  constructor(private _ser: ServicesUrlService, private _router: Router) {
  }
  

  userLogin(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])

    }

    this._ser.UserLogin(form).subscribe(() => {
      alert(" the user login sucessfully")
      this._router.navigate([''])
      //this.userRegisterArray = data
    },

      (error) => { alert(error.error) }
    )
  }
}
