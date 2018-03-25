import { Component, OnInit } from '@angular/core';
import {AuthService} from'../auth/auth.service'
import { LoginModel } from './Shared/loginmodel.model';
import { AccountMangementService } from './Shared/accountmanagementservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public username:string;
public password:string;
public IsLoginSucess :boolean = true;
  constructor(private accountManagementService:AccountMangementService) {
   
   }

  ngOnInit() {
  }

  Login()
  {
  
    this.accountManagementService.ValidateLoginAndSetToken(this.username,this.password);
  if(this.accountManagementService.IsLoginSucess)
  {
this.IsLoginSucess = false;
  }
  }

}
