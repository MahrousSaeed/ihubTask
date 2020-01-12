import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Globals, NotificationTypes } from 'src/app/services/globals';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any = []
  deleted_id = null
  constructor(private api:ApiService,public globals:Globals,private auth:AuthService,private router:Router) { }

  ngOnInit() {      
    this.api.all(this.api.endPoints.users).subscribe(res=> {
      this.users = res
    }, (err) => {
      this.globals.showToast('Something went wrong!','',NotificationTypes.Error)
      
    })
  }
  deleteUser = () => {
    this.api.delete(this.api.endPoints.users,this.deleted_id).subscribe(res =>{
      this.ngOnInit()
      this.deleted_id = null
      this.globals.showToast('User Deleted Successfully!','',NotificationTypes.Success)
    },()=> {
      this.globals.showToast('Something went wrong!','',NotificationTypes.Error)
    })  
  }

}
