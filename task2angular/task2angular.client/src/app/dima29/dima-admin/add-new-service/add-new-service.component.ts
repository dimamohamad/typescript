import { Component } from '@angular/core';
import { ServicesUrlService } from '../../dimaUrl/services-url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-service',
  templateUrl: './add-new-service.component.html',
  styleUrl: './add-new-service.component.css'
})
export class AddNewServiceComponent {

  ngOnInit() { }
  constructor(private _ser: ServicesUrlService, private _router: Router) {
  }
  //userRegisterArray: any


  image: any

  changeImage(event: any) {

    this.image=event.target.files[0]
  }

  addnewServices(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])

    }
    form.append("ServiceImage", this.image)
    this._ser.AddService(form).subscribe(() => {
      alert(" the Service add sucessfully")
      //this._router.navigate(['/Login'])
      //this.userRegisterArray = data
    },

      (error) => { alert(error.error) }
    )
  }




}
