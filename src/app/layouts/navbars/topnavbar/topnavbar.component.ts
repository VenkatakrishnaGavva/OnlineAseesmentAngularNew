import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { AccountMangementService } from '../../../login/Shared/accountmanagement.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor(private accountService:AccountMangementService, private router:Router) { }

  ngOnInit() {
  }
  SignOut()
  {
this.accountService.Logout();
  }
}
