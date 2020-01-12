import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'
import { Globals, NotificationTypes } from 'src/app/services/globals';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel = {
    name:null,
    email:null,
    phone:null,
    password:null
  }
  constructor(private auth:AuthService,private router:Router,private globals:Globals) { }

  ngOnInit() {
  }
  submitForm = () => {
    console.log('login',this.registerModel);
    this.auth.register(this.registerModel).subscribe(res => {
      console.log(res);
      this.globals.showToast('Register Successfully','',NotificationTypes.Success)
      this.router.navigate(['/login'])
    }, () => {
      this.globals.showToast('Something went Wrong!','',NotificationTypes.Error)
    })
    
  }

}
