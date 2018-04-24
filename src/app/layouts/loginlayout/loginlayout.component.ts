import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginlayout',
  templateUrl: './loginlayout.component.html',
  styleUrls: ['./loginlayout.component.css']
})
export class LoginlayoutComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() { 
   
  }
  logout()
  {
    this.router.navigate(['/login']);
    
    this.authService.logout();
   
  }
 


}
