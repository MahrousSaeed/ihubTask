import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

import {AuthGuard} from './auth.guard'

export const routes:Routes = [
    {
        path:'',
        component:HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'home',
        component:HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'profile',
        component:ProfileComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}