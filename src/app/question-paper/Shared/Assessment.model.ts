import {Options} from './OptionsModel.model'
import { Question } from './questionmodel.model';
export class AssessmentModel 
{
AssessmentId:number;
UserId:string;
QuestionPaperId:number;
QuestionPaper:Question[];
}