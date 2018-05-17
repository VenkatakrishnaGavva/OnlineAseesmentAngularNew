import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssessmentService } from '../services/assessment.service';
import { Question } from '../../../../question-paper/Shared/questionmodel.model';
import { QuestionPaperService } from '../../../../question-paper/Shared/questionpaper.service';

@Component({
  selector: 'app-assessment-review',
  templateUrl: './assessment-review.component.html',
  styleUrls: ['./assessment-review.component.css']
})
export class AssessmentReviewComponent implements OnInit {
public AssessmentNameList:any[];
public UsersList:any[]=[];
public AnsweredPaper:Question[];
public reviewForm:FormGroup;
  constructor(private fb:FormBuilder,private assessmentService:AssessmentService,private questionpaperService:QuestionPaperService) {
    this.assessmentService.GetAllAssessmentDetails().subscribe(
      response=>{this.AssessmentNameList = response;
     
     
     }
 
     
    );

    this.reviewForm = this.fb.group(
      {
        UserId: [-1, [Validators.required]],
        AssessmentId:[-1,[Validators.required]]
      });

  }
  OnAssessmentChange($event:any)
  {
this.assessmentService.GetAllUsersForAssessment($event.target.value).subscribe(
  repsonse=>
  {
  
    this.UsersList =[];
   let users = repsonse;
   for(let userFromservice of users)
   {
     let user:any = {};
   user.Username =  userFromservice.Username
   user.UserId =   userFromservice.UserId
   this.UsersList.push(user);
   }
  }
)
  }

  OnUserChange($event:any)
  {
  
    this.assessmentService.GetAssessmentForEvaluation(this.reviewForm.value.AssessmentId, $event.target.value).subscribe(
      response=>{
       
       this.questionpaperService.questionPaperWithAnsers.next(response.QuestionPaper);
     
      }
    )
  }
  ngOnInit() {
  }

}
