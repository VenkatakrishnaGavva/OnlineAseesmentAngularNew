import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Question } from '../question-paper/Shared/questionmodel.model';

@Component({
  selector: 'app-answer-statatus',
  templateUrl: './answer-statatus.component.html',
  styleUrls: ['./answer-statatus.component.css']
})
export class AnswerStatatusComponent implements OnInit {

  @Input() questionsList : Question[];
  @Input() questionNumber:number;
  @Input() answerStatusButtonsForRow :number;
  @Output() OnQuestionNumberClick: EventEmitter<number> = new EventEmitter<number>();
  constructor() { 

  }

  ngOnInit() {
   
  }
  createRange(){
    var items: number[] = [];
    
    for(var i = 1; i <= this.answerStatusButtonsForRow; i++){
     items.push(i);
      
      
    }
    return items;
  }
  applyGreenOrRed(index : number) : string
  {
return this.questionsList[index+this.questionNumber-1].isOptionSelected === true ? 'green' : 'red' 
  }

  onQuestionClick(ind)
  {
  
this.OnQuestionNumberClick.emit(this.questionNumber + ind);
  }
}
