import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesUrlService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7141/api";



  email: BehaviorSubject<string> = new BehaviorSubject<string>("")
  emailaddress = this.email.asObservable();



  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Service`);

  }
  getSubSerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerById/${id}`)
  }
  getSubScription(): Observable<any> {

    return this.http.get<any>(`${this.staticData}/Subsicription`);

  }
  getsubServicesbyServiceId(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerBySerId/${id}`);
  }
  addUserSubscription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/userSubsicription`, data);

  }

  addUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/User`, data);

  }

  UserLogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/User/login`, data);

  }

  AddService(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Service/add`, data);

  }


  UpdateService(id: any, data: any): Observable<any> {
    return this.http.put(`{this.staticData}/Service/updateService/${id}`, data)

  }




  getproducts(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Products`);

  }


  cartItem: any = [];
  cartITemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem);
  cartItemObser = this.cartITemSubject.asObservable();
  addTocart(data: any) {



    var record = this.cartItem.find((x: any) => x.productId == data.productId)
    if (record) {
      alert("the product already exist");
    }
    else {
      this.cartItem.push(data);
      this.cartITemSubject.next(this.cartItem);
    }


  }
  increaseQuantity(id: any) {

    var product = this.cartItem.find((x: any) => x.productId == id)


    if (product) {
      product.quantity += 1;
      this.cartITemSubject.next(this.cartItem);
    }
  }



  decreaseQuantity(id: any) {

    var product = this.cartItem.find((x: any) => x.productId == id)


    if (product) {
      product.quantity -= 1;
      this.cartITemSubject.next(this.cartItem);
    }
  }
}
