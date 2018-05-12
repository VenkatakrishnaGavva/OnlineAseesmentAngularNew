import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/observable/of';
import {Question} from'./questionmodel.model';
import { ApiService } from '../../api.service';
@Injectable()
export class QuestionPaperService {
  
 
  constructor(private http : HttpClient, private api:ApiService) { }
  getQuestionPaper(): Observable<Question[]> 
  {
  return this.api.get("api/GetQuestionPaper?userId="+sessionStorage.getItem("userid"));


  }

}