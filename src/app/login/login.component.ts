import { Component, OnInit, AfterViewInit } from '@angular/core';
import {AuthService} from'../auth/auth.service'
import { LoginModel } from './Shared/loginmodel.model';
import { AccountMangementService } from './Shared/accountmanagement.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { window } from 'rxjs/operator/window';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

public showLoginForm :boolean = true;
public loginModel :LoginModel = new LoginModel();
public loginprocessStarted = false;
public IsloginSucess = true;
  constructor(public accountManagementService:AccountMangementService,private router: Router,private authService: AuthService) {
    
    this.accountManagementService.OnLoginCompletedEvent.subscribe(IsValidUser=>{this.PostLoginRequest(IsValidUser)});
   }
   
PostLoginRequest(isvalidUser:boolean)
{
  this.loginprocessStarted = false;
this.IsloginSucess=isvalidUser;
}

  ngOnInit() {

    
  }

  Login()
  {
    
    this.loginprocessStarted = true;
     this.accountManagementService.ValidateLoginAndSetToken(this.loginModel.username,this.loginModel.password);
    
     

  }   
  ngAfterViewInit()
  {
    if(this.authService.isAuthenticated)
    {
      this.router.navigate(['/']);
    }
  }
  
   
  }


