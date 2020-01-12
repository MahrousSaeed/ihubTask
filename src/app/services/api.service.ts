import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://localhost:3000/'
  private endPoint:string
  public readonly endPoints = {
    users:'users/',
    // ...
  }
  constructor(private http:HttpClient) { 

  }
  all = (endPoint:string) => {
    return this.http.get(`${this.apiURL}${endPoint}`)
  }
  delete = (endPoint:string,id:number) =>{
    return this.http.delete(`${this.apiURL}${endPoint}${id}`)
  }
  update = (endPoint:string,id:number,data) =>{
    return this.http.put(`${this.apiURL}${endPoint}${id}`,data)
  }
}
