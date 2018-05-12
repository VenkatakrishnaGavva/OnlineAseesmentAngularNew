import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-questionpaperupload',
  templateUrl: './questionpaperupload.component.html',
  styleUrls: ['./questionpaperupload.component.css']
})
export class QuestionpaperuploadComponent implements OnInit {
  public QuestionPaperCreationform:FormGroup;
  public isUploadSuccess:boolean =false;
  constructor(private fb:FormBuilder ) {
    this.QuestionPaperCreationform = this.fb.group(
      {
        QuestionPaperName: ['', [Validators.required]],
        Description:['',Validators.required]
      }
    );
   }

  ngOnInit() {
  }

}
