import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {

  private _registerUrl = "http://127.0.0.1:8000/api/register";
  private _loginUrl = "http://localhost:8000/api/login";  
  private _ajoutUrl = "http://localhost:8000/api/partenaire/new";
  private _listUrl = "http://127.0.0.1:8000/api/partenaire/liste";
  private _compteUrl = "http://127.0.0.1:8000/api/compte/new";
  private _depotUrl = "http://127.0.0.1:8000/api/depot/new";
  
  constructor(private http: HttpClient ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  authUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  partenaireUser(user){
    console.log(user)
    return this.http.post<any>(this._ajoutUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getPartenaires(){
    return this.http.get<any>(this._listUrl);
  }

  compteUser(user){
    console.log(user)
    return this.http.post<any>(this._compteUrl, user)
  }

  depotUser(user){
    console.log(user)
    return this.http.post<any>(this._depotUrl, user)
  }
}
