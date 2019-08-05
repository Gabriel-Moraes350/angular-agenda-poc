import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class JsonBodyInterceptor implements HttpInterceptor
{

    constructor(){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
       
        req = req.clone({
            headers: req.headers.set('Content-Type', "application/json")
        })
       
        return next.handle(req);
    }
}