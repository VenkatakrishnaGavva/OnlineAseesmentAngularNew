import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()

export class AccountMangementService {
  
 public IsLoginSucess :boolean = true;
  constructor(private http : HttpClient,private authService: AuthService,private router: Router) { }
  public ValidateLoginAndSetToken(username:string, password:string): void {
   
   this.AuthenticateUserAndSetToken(username,password);
  
  }
 private AuthenticateUserAndSetToken(username:string, password:string) :void
 {    
    let headers = new HttpHeaders();
   
let urlSearchParams = new URLSearchParams();

urlSearchParams.append('grant_type', 'password');
urlSearchParams.append('username', username);
urlSearchParams.append('password', password);
let body = urlSearchParams.toString()

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
   let token = this.http.post<any>("https://onlineassessmentapi.azurewebsites.net/token",body,{headers:headers});
  
token.subscribe(tokenresult=>localStorage.setItem("token",tokenresult.access_token),error=>{

  if(error.status==400)
  {
    this.IsLoginSucess= false;
  }
});


if(this.authService.redirectUrl==undefined)
{
  this.router.navigate(["/"]);
}
else{
  this.router.navigate([this.authService.redirectUrl]);
}

 }
  
  
  
}