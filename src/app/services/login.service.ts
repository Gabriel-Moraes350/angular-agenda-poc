import { AppSettings } from './../shared/AppSettings';
import { ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logged: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) { 
    if(localStorage.getItem(AppSettings.API_KEY)){
      this.logged = new BehaviorSubject<boolean>(true);
    }else{
      this.logged = new BehaviorSubject<boolean>(false);
    }

  }

  public login(username: string, password: string): Observable<any>{
      return this.http.post(`${environment.API_URL}auth/signin`, {
        username,
        password
      });
  }

  public setToken(response: any): void{
    if(response !== undefined)
      this.next(true);
    else
      this.next(false);
    localStorage.setItem(AppSettings.API_KEY, response);
  }
 
  public isLogged(): Observable<boolean>{
    return this.logged.asObservable();
  }

  next(logged: boolean){
    this.logged.next(logged);
  }
  
}