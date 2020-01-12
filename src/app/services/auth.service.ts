import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ApiService } from './api.service';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private api:ApiService,private globals:Globals) { }

  register = (data) => {
    return this.http.post(`${this.api.apiURL}${this.api.endPoints.users}`, data)
  }

  login = (data) => {
    return this.http.post(`${this.api.apiURL}login`, data)
  }
  loginUser = (user) => {
    // save user in localStorage 
    // localStorage.setItem('login_user',user)
    this.globals.localStorage.set('login_user', user , 0, 's');

  }
  logout = () => {
    this.globals.localStorage.remove('login_user')
    // window.location.reload()
  }
}
