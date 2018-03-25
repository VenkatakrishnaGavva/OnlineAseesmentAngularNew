import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthService {
  public redirectUrl: string;

  constructor(private http : HttpClient) { }
  public getToken(): string {

   return localStorage.getItem('token');
  }
  public isAuthenticated(): boolean {
    // get the token

    const token = this.getToken();

    if(token=="null")
    {
      return false;
    }
    else{
    return true;
    }
  }
}