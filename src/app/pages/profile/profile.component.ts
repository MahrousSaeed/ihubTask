import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'
import { Globals, NotificationTypes } from 'src/app/services/globals';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editModel = {
    name:this.globals.currentUser.name,
    email:this.globals.currentUser.email,
    phone:this.globals.currentUser.phone,
    password:this.globals.currentUser.password
  }
  constructor(private api:ApiService,private router:Router,private globals:Globals) { }

  ngOnInit() {
  }
  submitForm = () => {
    console.log('login',this.editModel);
    this.api.update(this.api.endPoints.users,this.globals.currentUser.id,this.editModel).subscribe(res => {
      console.log(res);
      this.globals.showToast('Profile Updated Successfully','',NotificationTypes.Success)
      this.router.navigate(['/home'])
    }, () => {
      this.globals.showToast('Something went Wrong!','',NotificationTypes.Error)
    })
    
  }


}
