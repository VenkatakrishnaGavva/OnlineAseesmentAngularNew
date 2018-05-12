import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {
public AllusersData:any[];
  constructor(private userService:UserService,private router: Router) { 
   this.userService.GetAllUsers().subscribe(
     response=>{
       this.AllusersData = response;
     }
   );
  
  }
  OnEditUserClick(user:any)
  {
    this.userService.EditUserDetais.next(user);
    this.router.navigate(['/master/EditUser']);
  }
  ngOnInit() {
  }


}
