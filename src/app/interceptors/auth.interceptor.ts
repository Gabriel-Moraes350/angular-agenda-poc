import { LoginService } from './../services/login.service';
import { Injectable, Injector } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError} from "rxjs/internal/operators";


@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    loginService: LoginService


    constructor(private router: Router, 
                private injector: Injector) { 
        this.loginService = this.injector.get(LoginService);
        console.log('enter constructor');
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        if(req.url.indexOf("/login") !== -1){
            console.log('entrou aqui');
            return next.handle(req);
        }
        
        let token =  this.loginService.token;
        if(token){
            req = req.clone({
                headers: req.headers.set('Authorization', token)
            })
        }

        return next.handle(req).pipe(catchError( (error: HttpErrorResponse) => {
            if(error.status === 403){
                console.log('erro status', error);
                this.loginService.setToken(undefined);
                this.router.navigateByUrl("/login");
            }
            return throwError(error);
       }));
    }
}