import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../api.service';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class UserService {
public IsUserFormDataSubmitted : Subject<boolean>= new Subject<boolean>();
  constructor(private api:ApiService,private http:HttpClient) {
   
   }

   public PostFormData(userformdata:any)
   {
    
    var result= this.http.post(this.api.BaseWebApiURL + "api/CreateUser", userformdata);

    result.subscribe(
      
      resultData=>{
        this.IsUserFormDataSubmitted.next(true);
      },
      error=>{
        this.IsUserFormDataSubmitted.next(true);
        
      }); 
  
   }

}
