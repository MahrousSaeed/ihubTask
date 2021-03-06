import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/services/globals';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public globals:Globals,private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }
  logout = () => {
    this.auth.logout()
    this.globals.currentUser = null
    this.router.navigate(['/login'])
  }

}
