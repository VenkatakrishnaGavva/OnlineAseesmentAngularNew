import { Injectable, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { ApiService } from '../../api.service';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()

export class AccountMangementService {
  public OnLoginCompletedEvent: EventEmitter<any> = new EventEmitter();
  //public LoggedinUserId : ReplaySubject<string>= new ReplaySubject<string>();

  constructor(private authService: AuthService,private router: Router,private api:ApiService) { }
  
  public Logout()
  {
    this.authService.logout();
    location.replace("/");
  }
  public ValidateLoginAndSetToken(username:string, password:string):void {
    let res = (this.AuthenticateUserAndSetToken(username,password));

  
  }

 private AuthenticateUserAndSetToken(username:string, password:string) 
 {    
 
   
  let urlSearchParams = new URLSearchParams();
  
  urlSearchParams.append('grant_type', 'password');
  urlSearchParams.append('username', username);
  urlSearchParams.append('password', password);
  let body = urlSearchParams.toString();
  
       let token = this.api.PostWithURLSerachParams("token",body);
  
  token.subscribe(tokenresult=>{this.PostAuthenticationSucess(tokenresult)},error=>{
    
  if (error instanceof HttpErrorResponse) {
    this.OnLoginCompletedEvent.emit(false);
    if (error.status === 400) {
      
    }
  }
});




 }
 
 PostAuthenticationSucess(tokenresult:any)
 {
   
  //this.LoggedinUserId.next(tokenresult.userid);
  
  this.OnLoginCompletedEvent.emit(true);  
      this.router.navigate(["/StartExam"]);

  


   sessionStorage.setItem("token",tokenresult.access_token);
   sessionStorage.setItem("userid",tokenresult.userid);
   sessionStorage.setItem("RoleId",tokenresult.RoleId);
   
 }
  
  
}