import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit() {
   
  }
  public onActivate($event:any)
  {
if(this.router.url === '/login')
{
  this.authService.isRouteroutletLoaded = false;
}
else{
    this.authService.isRouteroutletLoaded = true;
}
  }
  logout()
  {
    this.router.navigate(['/login']);
    
    this.authService.logout();
   
  }
 
}
