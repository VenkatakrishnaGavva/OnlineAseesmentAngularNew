import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../api.service';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable()
export class UserService {
  public EditUserDetais: BehaviorSubject<any> = new BehaviorSubject<any>({});

public IsUserFormDataSubmitted : Subject<boolean>= new Subject<boolean>();
  constructor(private api:ApiService,private http:HttpClient) {
   
   }

   public PostFormData(userformdata:any):Observable<any>
   {
    
return this.http.post(this.api.BaseWebApiURL + "api/CreateUser", userformdata);

    
   }
   public UpdateUser(userformdata:any):Observable<any>
   {
    
return this.http.post(this.api.BaseWebApiURL + "api/UpdateUser", userformdata);

    
   }
   GetAllUsers():Observable<any>
  {
   
return this.api.get("api/GetAllUsers");
  }

}
