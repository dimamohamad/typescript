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
 
  getsubServicesbyServiceId(id:any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/getSubSerBySerId/${id}`);
  }

}
