import { Injectable } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AssessmentService {

  constructor(private api:ApiService) {
  }
  public GetAllQuestionPaperDetails():Observable<any[]>
  {
return this.api.get("api/GetQuestionPaperNames");
  }

  public GetAllAssessmentDetails():Observable<any[]>
  {
return this.api.get("api/GetAllAssessments");
  }
  GetAllUsers():Observable<any>
  {
   
return this.api.get("api/GetAllUsers");
  }
  public PostAssesmentForm(formData:any):Observable<any>
  {
return this.api.Post("api/CreateAssessment",formData);
  }

  public MapAnAssessmentToUser(formData:any):Observable<any>
  {
   return this.api.Post("api/MapAnAssessmentToUser",formData);
  }
}
