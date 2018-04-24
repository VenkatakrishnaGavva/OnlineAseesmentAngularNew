import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from '../admindashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
public IsDashBoardVisible:boolean = true;

constructor(private router: Router) {
  // override the route reuse strategy
  this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
}
  ngOnInit() {
      
  }
 

  onActivate(component) {

    this.IsDashBoardVisible=false;
   
  }
  }
