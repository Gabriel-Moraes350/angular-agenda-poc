import { Contato } from './../../../models/Contato';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public send(contato: Contato): Observable<Contato>{
    return this.http.post<Contato>("http://localhost:8080/contatos", contato, this.httpOptions)
  }

  public getItems():  Observable<Contato[]>{
    return this.http.get<Contato[]>("http://localhost:8080/contatos", this.httpOptions);
  }
}
