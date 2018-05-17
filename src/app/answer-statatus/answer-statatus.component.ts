import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../question-paper/Shared/questionmodel.model';

@Component({
  selector: 'app-answer-statatus',
  templateUrl: './answer-statatus.component.html',
  styleUrls: ['./answer-statatus.component.css']
})
export class AnswerStatatusComponent implements OnInit {

  @Input() questionsList: Question[];


  @Output() OnQuestionNumberClick: EventEmitter<number> = new EventEmitter<number>();
  constructor() {

  }

  ngOnInit() {

  }

  applyGreenOrRed(index: number): string {
    if (this.questionsList[index]) {
      return this.questionsList[index].isOptionSelected === true ? 'green' : 'red';
    }

  }

  onQuestionClick(ind) {

    this.OnQuestionNumberClick.emit(ind);
  }
}
