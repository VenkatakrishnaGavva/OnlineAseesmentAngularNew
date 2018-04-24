import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AccountMangementService } from '../../login/Shared/accountmanagement.service';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {
  sidebarcssclass:string ="" ;
  
  constructor(private accountManagementService:AccountMangementService) { }

  ngOnInit() {
  }
  onSideBarCollapseClick()
{
 
  if(this.sidebarcssclass=="")
  {
    this.sidebarcssclass="active";
  }
  else{
    this.sidebarcssclass="";
  }
}

Logout()
{
  
  this.accountManagementService.Logout();
  
}
}
