import { Component } from '@angular/core';
import { ServicesUrlService } from '../../dimaUrl/services-url.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent {
  param:any
  ngOnInit() {
    this.param = this._active.snapshot.paramMap.get('id')
   //start ponit of lifecycle of angular when we make a refresh or reload will go to ngonit
  }
  constructor(private _ser: ServicesUrlService, private _active: ActivatedRoute, private _router: Router) {


  }
  imageFile:any
  changeImage(event: any) {
    this.imageFile = event.target.files[0] 


  }
  Array: any
  updateServices(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])

    }
    form.append("ServiceImage", this.imageFile)
    this._ser.AddService(form).subscribe(() => {
      alert(" the Service add sucessfully")
      this._router.navigate(['Dashboard'])
    },

      (error) => { alert(error.error) }
    )





   this._ser.UpdateService(this.param,data).subscribe((data) => {
    alert("the services update sucessfully")
    })
    this._router.navigate(['getAdminServices'])
  }
}
