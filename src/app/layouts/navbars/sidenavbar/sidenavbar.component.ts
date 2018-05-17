import { Component, OnInit } from '@angular/core';
import { SideNavBarMenuService } from './services/side-nav-bar-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
public ModuleWisePages:any[];
  constructor(private sideNavBarMenuService:SideNavBarMenuService, private router:Router) {
    
  this.sideNavBarMenuService.GetModuleWiseMenuPagesForAccess(sessionStorage.getItem("RoleId")).subscribe(
repsonse=>{
 this.ModuleWisePages = repsonse;


}
  );
  
   }
   Navigate(pageUrl:any){
     
    this.router.navigate([pageUrl]);
   }

  ngOnInit() {
  }

}
