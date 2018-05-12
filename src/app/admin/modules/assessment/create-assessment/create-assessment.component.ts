import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AssessmentService } from '../services/assessment.service';


@Component({
  selector: 'app-create-assessment',
  templateUrl: './create-assessment.component.html',
  styleUrls: ['./create-assessment.component.css']
})
export class CreateAssessmentComponent implements OnInit {
  public assessmentCreationForm:FormGroup;
  public  QuestionPaperNameList:any[];
  public IsAssessmentCreated:boolean = false;
  constructor(private fb:FormBuilder,private assessmentService:AssessmentService) {
   this.assessmentService.GetAllQuestionPaperDetails().subscribe(
     response=>{this.QuestionPaperNameList = response;
      
    }
   )
    this.assessmentCreationForm = this.fb.group(
      {
        AssessmentName: ['', [Validators.required]],
        AssessmentDescription:['', [Validators.required]],
        QuestionPaperId:[-1,[Validators.required]],
        StartTime :[(new Date()).toISOString(), [Validators.required]],
        EndTime :[(new Date()).toISOString(), [Validators.required]]
      });

   }

  ngOnInit() {
  }
 
  SubmitFormData()
  {
let creationForm= this.assessmentCreationForm.value;
creationForm.CreatedBy =sessionStorage.getItem("userid");
this.assessmentService.PostAssesmentForm(creationForm).subscribe(
  response=>
  {
    this.IsAssessmentCreated =true;
  }
)
  }

}
