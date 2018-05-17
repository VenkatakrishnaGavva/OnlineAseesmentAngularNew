import { Component, OnInit } from '@angular/core';
import { QuestionPaperService } from '../question-paper/Shared/questionpaper.service';
import { Question } from '../question-paper/Shared/questionmodel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.component.html',
  styleUrls: ['./examresult.component.css']
})
export class ExamresultComponent implements OnInit {
  rightAnsweredCount:string;
  public QuestionpaperWithAnswers:Question[]=[];
  constructor(private questionPaperService:QuestionPaperService, private router:Router) {
    this.rightAnsweredCount = sessionStorage.getItem("rightAnsweredCount");
   this.questionPaperService.questionPaperWithAnsers.subscribe(

    response=>{
      this.QuestionpaperWithAnswers = response;
   
    }
   )
   }

  ngOnInit() {
  }

  ReviewAnswers()
  {
   this.router.navigate(["/StartExam"]);
  }
}
