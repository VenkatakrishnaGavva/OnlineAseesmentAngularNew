import { Component, OnInit } from '@angular/core';
import {AuthService} from'../auth/auth.service'
import { LoginModel } from './Shared/loginmodel.model';
import { AccountMangementService } from './Shared/accountmanagementservice.service';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { window } from 'rxjs/operator/window';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public username:string;
public password:string ;
public showLoginForm :boolean = true;
  constructor(public accountManagementService:AccountMangementService,private router: Router,private authService: AuthService) {
    
   }
   
  ngOnInit() {

    if(this.authService.isAuthenticated())
    {
     
      if(!this.authService.redirectUrl)
      {
        location.replace("/");
      }
      else{
        alert("");
        this.router.navigate[this.authService.redirectUrl];
      }
    }
  }

  Login()
  {
    this.showLoginForm = false;
     this.accountManagementService.ValidateLoginAndSetToken(this.username,this.password);
     
     

  }   
   
  
   
  }


