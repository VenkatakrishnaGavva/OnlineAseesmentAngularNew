import { Component, OnInit, Input } from '@angular/core';

import {Question} from './Shared/questionmodel.model'
import {Options} from './Shared/OptionsModel.model'
import {QuestionPaperService} from './Shared/questionpaper.service'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { Router } from '@angular/router';
import { AssessmentModel } from './Shared/Assessment.model';

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})


export class QuestionPaperComponent implements OnInit {

  @Input() questionsList : Question[];
rightAnsweredCount  : number = 0;
assessment : AssessmentModel = new AssessmentModel();
currentQuestion:Question;
currentQuestionNumber : number;
currentQuestionIndex : number;
answerStatusButtonForRow :number;
IsReviewMode:boolean =false;
IsProgressSpinnerVisible :boolean;
  constructor(private questionPaperervice:QuestionPaperService, public router:Router) {
    this.answerStatusButtonForRow = 5;
    this.IsProgressSpinnerVisible = true;
   // this.assessment.QuestionPaper = this.questionsList;
  this.questionPaperervice.questionPaperWithAnsers.subscribe(
    response=>
    {
    
      this.assessment.QuestionPaper =response;
    }
  );
   
  if(this.assessment.QuestionPaper && this.assessment.QuestionPaper.length==0)
  {
    this.questionPaperervice.getQuestionPaper().subscribe(model=>{
      this.IsReviewMode =false;
      this.assignQuestionPaper(model);
      
   
 
    });
  }
  

    
    
    
    


  
  }

  ngOnInit() {
   
   
  }

 
  IsReviewModeEnabled():boolean
  {
    return this.IsReviewMode;
  }
  assignQuestionPaper(model:any)
  {

    this.assessment = model;
      this.currentQuestionIndex =0;

      this.IsProgressSpinnerVisible = false;
  }

  btnNextClick()
  {
    this.currentQuestionIndex = this.currentQuestionIndex+1;
 
  }

  btnPreviousClick()
  {
    this.currentQuestionIndex = this.currentQuestionIndex-1;
    
  }
btnSubmitClick()
{

let isWillingToSubmit = confirm("Do you really want to submit the Answers?");
if(isWillingToSubmit)
{

  this.CalculateResult();
  //this.this.assessment.QuestionPaperervice.setQuestionPaperWithAnswers(this.this.assessment.QuestionPaper);
  this.assessment.UserId =  sessionStorage.getItem("userid");
  this.questionPaperervice.SaveResultAndAssessment(this.assessment).subscribe(response=>
    {
this.router.navigate(["/ExamResult"]);
    });;
 
}
}

IsSingleOptionType(currentQuestionIndex):boolean
{
  if(this.assessment.QuestionPaper)
  {
    if(this.assessment.QuestionPaper[currentQuestionIndex])
  {
if(this.assessment.QuestionPaper[currentQuestionIndex].OptionType == "Single correct answer")
{
  return true;
}
else{
  return false;
}
  }
}
}

IsSubjectiveTypeAnswer(currentQuestionIndex):boolean
{

  if(this.assessment.QuestionPaper)
  {
    if(this.assessment.QuestionPaper[currentQuestionIndex])
{
  if(this.assessment.QuestionPaper[currentQuestionIndex].OptionType == "SubjectiveTypeAnswer")
  {
    return true;
  }
  else{
    return false;
  }
}
}
}
CalculateResult()
{
 
  this.rightAnsweredCount =0;
  for (let i = 0; i < this.assessment.QuestionPaper.length ; i++) {
    let question = this.assessment.QuestionPaper[i];
   
    if(question.SelectedOptionId == question.RightOptionId)
    {
      this.rightAnsweredCount = this.rightAnsweredCount+1;
    }
    sessionStorage.setItem("rightAnsweredCount",this.rightAnsweredCount.toString());
  }
}
  OnOptionSelect(option:Options)
  {
    
    this.assessment.QuestionPaper[this.currentQuestionIndex].isOptionSelected = true;

   
    this.assessment.QuestionPaper[this.currentQuestionIndex].SelectedOptionId =  option.ID;
    
  }
  OnQuestionNumberClick(event:any)
  {
 this.currentQuestionIndex = event;
  }
  createRange(){
    var items: number[] = [];
    for(var i = 1; i <= this.assessment.QuestionPaper.length; i++){
      if((i%this.answerStatusButtonForRow)==1) 
      {
      items.push(i);
      }
    }
    return items;
  }
}
