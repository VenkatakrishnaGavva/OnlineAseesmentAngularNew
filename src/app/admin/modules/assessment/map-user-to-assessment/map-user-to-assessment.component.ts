import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AssessmentService } from '../services/assessment.service';

@Component({
  selector: 'app-map-user-to-assessment',
  templateUrl: './map-user-to-assessment.component.html',
  styleUrls: ['./map-user-to-assessment.component.css']
})
export class MapUserToAssessmentComponent implements OnInit {

  public mapUserToAssessmentCreationForm:FormGroup;
  public  AssessmentNameList:any[];
  public  UserList:any[];
  public IsCreated:boolean = false;
  constructor(private fb:FormBuilder,private assessmentService:AssessmentService) {
   this.assessmentService.GetAllAssessmentDetails().subscribe(
     response=>{this.AssessmentNameList = response;
    
    
    }

    
   );


   this.assessmentService.GetAllUsers().subscribe(
    response=>{this.UserList = response;
     
     
   }

   
  );
    this.mapUserToAssessmentCreationForm = this.fb.group(
      {
        UserId: [-1, [Validators.required]],
        AssessmentId:[-1,[Validators.required]]
      });

   }

  ngOnInit() {
  }
  SubmitFormData()
  {
let UserAssessmentData:any={};
UserAssessmentData.UserId =  this.mapUserToAssessmentCreationForm.value.UserId;
UserAssessmentData.AssessmentId =  this.mapUserToAssessmentCreationForm.value.AssessmentId;
 this.assessmentService.MapAnAssessmentToUser(UserAssessmentData).subscribe(
   response=>{}
 );
  }


  

}
