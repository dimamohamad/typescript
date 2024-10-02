import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesUrlService {

  constructor(private http: HttpClient) { }
  staticData = "https://localhost:7141/api"
 
  getServices(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Service`);

  }
  getSubSerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerById/${id}`)
  }
  getSubScription(): Observable<any> {
  
    return this.http.get<any>(`${this.staticData}/Subsicription`);

  }
  getsubServicesbyServiceId(id:any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerBySerId/${id}`);
  }
  addUserSubscription(data:any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/userSubsicription`,data);

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
}
