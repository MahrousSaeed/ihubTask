import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpHeaders, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { retry, catchError } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Globals } from './globals';
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private router: Router, private authService: AuthService, private globals: Globals) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.globals.currentUser != null) {
            const token = this.globals.currentUser.token
            // if the token is  stored in localstorage add it to http header
            const headers = new HttpHeaders().set("access-token", token);
            //clone http to the custom AuthRequest and send it to the server 
            const AuthRequest = request.clone({ headers: headers });
            return next.handle(AuthRequest)
        } 
        else {
            return next.handle(request)
        }
    }


}