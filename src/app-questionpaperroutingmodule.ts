import {NgModule} from '@angular/core'
import {RouterModule,Route} from '@angular/router'

 import { QuestionPaperComponent }  from '../src/app/question-paper/question-paper.component';

 import { QuestionpaperuploadComponent }  from './app/questionpaperupload/questionpaperupload.component';
import {ExamresultComponent} from'./app/examresult/examresult.component';
import { AuthGuardService as AuthGuard } from './app/auth/auth-guard.service';
import { LoginComponent } from './app/login/login.component';

const routes: Route[] = [
    { path: '', component: QuestionPaperComponent,canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
  { path: 'QuestionPaper', component: QuestionPaperComponent,canActivate:[AuthGuard] },
  {path:'ExamResult',component:ExamresultComponent,canActivate:[AuthGuard]},
  { path: 'QuestionPaperUpload', component: QuestionpaperuploadComponent,canActivate:[AuthGuard] }
];
@NgModule({
  exports: [ RouterModule  ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class QuestionPaperAppRoutingModule 
{

}