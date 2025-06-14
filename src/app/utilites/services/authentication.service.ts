import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _http:HttpClient
  ) { }

  signUp(signUpData:any):Observable<any>{
  return this._http.post(environment.myMusicAPI+'User/UserSignUp',signUpData);
  }

    login(signUpData:any):Observable<any>{
  return this._http.post(environment.myMusicAPI+'User/UserLogin',signUpData);
  }
}
