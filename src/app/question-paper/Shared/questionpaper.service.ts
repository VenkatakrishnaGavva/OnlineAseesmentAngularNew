import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';
import {Question} from'./questionmodel.model';
@Injectable()
export class QuestionPaperService {
  
 
  constructor(private http : HttpClient) { }
  getQuestionPaper(): Observable<Question[]> 
  {
  return this.http.get<Question[]>("https://onlineassessmentappwebapi20180312085836.azurewebsites.net/api/GetQuestionPaper");


  }

}