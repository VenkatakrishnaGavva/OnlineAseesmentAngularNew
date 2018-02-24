import { Component, OnInit } from '@angular/core';

import {Question} from './Shared/questionmodel.model'
import {Options} from './Shared/OptionsModel.model'
import {QuestionPaperService} from './Shared/questionpaper.service'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

@Component({
  selector: 'app-question-paper',
  templateUrl: './question-paper.component.html',
  styleUrls: ['./question-paper.component.css']
})
export class QuestionPaperComponent implements OnInit {
questions : Question[];
currentQuestion:Question;
currentQuestionNumber : number;
currentQuestionIndex : number;
answerStatusButtonForRow :number;
IsProgressSpinnerVisible :boolean;
  constructor(private questionService:QuestionPaperService) {
    this.IsProgressSpinnerVisible = true;
 this.answerStatusButtonForRow = 5;
  
  }

  ngOnInit() {
   
    this.questionService.getNameFromService().subscribe(model=>this.assignQuestionPaper(model));
    
  }
  assignQuestionPaper(model)
  {
   
    this.questions = model;
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

  OnOptionSelect(option:Options)
  {
    
    this.questions[this.currentQuestionIndex].isOptionSelected = true;

   
    this.questions[this.currentQuestionIndex].SelectedOptionId =  option.ID;
    
  }
  OnQuestionNumberClick(event:any)
  {
 this.currentQuestionIndex = event-1;
  }
  createRange(){
    var items: number[] = [];
    for(var i = 1; i <= this.questions.length; i++){
      if((i%this.answerStatusButtonForRow)==1) 
      {
      items.push(i);
      }
    }
    return items;
  }
}
