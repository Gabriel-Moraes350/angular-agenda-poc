import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subscriber, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private source = new Subject<boolean>();
  isLogged = this.source.asObservable();

  token: string = "";
  destRoute: string = ""

  constructor(private http: HttpClient) { }

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

    this.token = response;
  }
 
  next(logged: boolean){
    this.source.next(logged);
  }
  
  setRoute(route: string){
    this.destRoute = route
  }

  getRoute(): string{
    return this.destRoute
  }
}