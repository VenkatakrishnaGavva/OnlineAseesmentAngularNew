import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrls: ['./examresult.component.css']
})
export class ExamresultComponent implements OnInit {
  rightAnsweredCount:string;
  constructor() {
    this.rightAnsweredCount = sessionStorage.getItem("rightAnsweredCount");

   }

  ngOnInit() {
  }

}
