import { Component } from '@angular/core';
import { ServicesUrlService } from '../dimaUrl/services-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrl: './registration-user.component.css'
})
export class RegistrationUserComponent {
  ngOnInit() {  }
  constructor(private _ser: ServicesUrlService, private _router:Router ) {
  }
  userRegisterArray: any
 
  addnewusers(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key,data[key])

    }

    this._ser.addUser(form).subscribe(() => {
      alert (" the user added sucessfully")
      this._router.navigate(['/Login'])
      //this.userRegisterArray = data
    },

      (error) => { alert(error.error)}
    )
  }

}
