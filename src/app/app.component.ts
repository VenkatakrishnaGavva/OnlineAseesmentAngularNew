import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { ApiService } from './api.service';
import { AccountMangementService } from './login/Shared/accountmanagement.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService:AuthService,private router:Router, private api:ApiService, private accountService:AccountMangementService) { 
 


  }

  title = 'app';
  ngOnInit(){
    
    // Observable.interval(2000 * 60).subscribe(x => {
    //  console.log("Logged");
    // });
  }
}


