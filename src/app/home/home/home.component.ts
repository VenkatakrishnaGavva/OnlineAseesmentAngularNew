  import { Component, OnInit } from '@angular/core';
import { AccountMangementService } from '../../login/Shared/accountmanagement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public LoggedinUserId :string ;
  constructor(public accountMangementService:AccountMangementService) { 
   

  }

  ngOnInit() {
    
  }

}
