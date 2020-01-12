import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';


@Injectable({
    providedIn: 'root'
})
export class Globals {
    currentUser = null
    //get the current user from local storage
    constructor(private toastr: ToastrService,public localStorage: LocalStorageService) {
        this.currentUser = this.localStorage.get('login_user')
    }
    showToast(massage: string,title:string, type:NotificationTypes) {
        if(type == NotificationTypes.Error) 
            this.toastr.error(massage, title);
        if(type == NotificationTypes.Success)
            this.toastr.success(massage, title);
        if(type == NotificationTypes.Info)
            this.toastr.info(massage, title);
    }

}
export enum NotificationTypes {
    Success, Error, Info
}