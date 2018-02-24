import {Options} from './OptionsModel.model'
export class Question 
{
id : number;
QuestionText : string;
Options :Options[];
RightOptionId:number;
isOptionSelected : boolean;
SelectedOptionId : number;
}