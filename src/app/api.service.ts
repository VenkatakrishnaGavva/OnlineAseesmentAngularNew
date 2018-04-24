import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';


@Injectable()

 export  class ApiService {
  
 public IsLoginSucess :boolean = true;
 public BaseWebApiURL:string= "http://localhost:58695/";
  constructor(private http : HttpClient) { }
 
  public get(url:string):Observable<any>{
    return this.http.get<any>(this.BaseWebApiURL+ "api/GetQuestionPaper");

  }
  public PostUploadFiles(url:string,files :any, params:any):Observable<any>
  {
    return  this.http.post(this.BaseWebApiURL + url, files,{params:params })
       
  }
 public PostWithURLSerachParams(url:string, body:string) : Observable<any>
 {    
  let headers = new HttpHeaders();
   
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
return this.http.post<any>(this.BaseWebApiURL+url,body,{headers:headers});





 }
  
  
}