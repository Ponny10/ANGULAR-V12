import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  // TODO: Leer de forma privada la un valor de enviroment
  private readonly URL = environments.api;

  constructor(private http: HttpClient) {}

  singIn(email: string, password: string): Observable<any> {
    console.log('Llegan los datos * * * ', email, password);
    
    return this.http.post(`${this.URL}/auth/login`, {email, password}).pipe(
      tap((resp: any) => {
        const {tokenSession} = resp;
        localStorage.setItem('tokenSpotify', tokenSession);
      })
    )
  }
}
