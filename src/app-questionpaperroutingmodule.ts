import {NgModule} from '@angular/core'
import {RouterModule,Route} from '@angular/router'

 import { QuestionPaperComponent }  from '../src/app/question-paper/question-paper.component';

 import { QuestionpaperuploadComponent }  from './app/questionpaperupload/questionpaperupload.component';
import {ExamresultComponent} from'./app/examresult/examresult.component';
const routes: Route[] = [
    { path: '', component: QuestionPaperComponent },
  { path: 'QuestionPaper', component: QuestionPaperComponent },
  {path:'ExamResult',component:ExamresultComponent},
  { path: 'QuestionPaperUpload', component: QuestionpaperuploadComponent }
];
@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class QuestionPaperAppRoutingModule 
{

}