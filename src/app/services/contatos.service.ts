import { environment } from './../../environments/environment';
import { Contato } from './../models/Contato';
import { AppSettings } from '../shared/AppSettings';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient,
              private loader: NgxUiLoaderService) { }

  public send(contato: Contato): Observable<Contato>{
    this.loader.start();
    return this.http.post<Contato>(environment.API_URL + "contatos", contato).pipe( 
      finalize(() => {
          this.loader.stop()
      })
    )
  }

  public getItems(size: number = AppSettings.ITEMS_PER_PAGE,
                  page: number = 1):  Observable<any[]>{
    this.loader.start();                
    return this.http.get<any[]>(`${environment.API_URL}contatos/list?size=${size}&page=${page}`).pipe( 
                                  finalize(() => {
                                      this.loader.stop()
                                  })
                                );
  }

  public getItem(id: number){
    this.loader.start();
    return this.http.get<Contato>(`${environment.API_URL}contatos/${id}`).pipe( 
      finalize(() => {
          this.loader.stop()
      })
    );
  }

  public excluir(id: number){
    this.loader.start();
    return this.http.delete(`${environment.API_URL}contatos/${id}`).pipe( 
      finalize(() => {
          this.loader.stop()
      })
    );
  }
}
