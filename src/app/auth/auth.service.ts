import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()

export class AuthService {
  public redirectUrl: string;
public logoutClick: boolean = false;
public isRouteroutletLoaded :boolean = false;
  constructor(private http : HttpClient) { }
  public getToken(): string {

   return localStorage.getItem('token');
  }
  public logout():void
  {

    localStorage.setItem("token",null);
    this.isRouteroutletLoaded = false;
    this.logoutClick = true;
  }
  public isAuthenticated(): boolean {
    // get the token

    const token = this.getToken();

    if(token==="null")
    {
      return false;
    }
    else{
    return true;
    }
  }
  public isAuthenticatedasync(): Observable<boolean> {
    // get the token

    const token = this.getToken();

    if(token==="null")
    {
      return of(false);
    }
    else{
    return of(true);
    }
  }
}