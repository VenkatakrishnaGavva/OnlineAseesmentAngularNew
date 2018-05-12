
import { Injectable } from '@angular/core';
import { ApiService } from '../../../../../api.service';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable()
export class PermisssionService {
  constructor(private api:ApiService) {
  
 
   }

   public GetAllModules():Observable<any>
   {
    
return  this.api.get("api/GetAllModules");

    
   }
   public PostFormData(formdata:any):Observable<any>
   {
    
return this.api.Post("api/CreatePermission", formdata);

    
   }

}
