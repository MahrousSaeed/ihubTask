import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Globals, NotificationTypes } from 'src/app/services/globals';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email
  password
  users:any = []
  token:any = {}
  constructor(private auth:AuthService,private router:Router,private globals:Globals,private api:ApiService) { }
  
  ngOnInit() {
  }
  submitForm = () => {
    console.log('login');
    this.auth.login({email:this.email,password:this.password}).subscribe(res => {
      this.token = res
      console.log(res);
      this.api.all(this.api.endPoints.users).subscribe(response => {
        this.users = response
        let currentUser = this.users.filter(item => item['email'] === this.email)
        currentUser[0]['token'] = this.token.accessToken   
        console.log(currentUser);
        this.globals.currentUser = {
          id:currentUser[0].id,
          name:currentUser[0].name,
          email:currentUser[0].email,
          phone:currentUser[0].phone,
          token:currentUser[0].token
        }
        this.auth.loginUser(currentUser[0])
        // window.location.reload()
      })
      this.router.navigate(['/home'])
      // users from api 
      // return curent user data 
      // this.auth.loginUser()      
    },(err) => {
      console.log(err);
      this.globals.showToast(err.error,'',NotificationTypes.Error)
      
    })
    
  }

}
