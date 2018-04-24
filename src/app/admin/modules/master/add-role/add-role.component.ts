import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})

export class AddRoleComponent implements OnInit {
  public roleCreationForm:FormGroup;
  constructor(private fb:FormBuilder) { 

    this.roleCreationForm = this.fb.group(
      {
        RoleName: ['', [Validators.required,this.IsRoleAlreadyExists]],
        Description:['',Validators.required]
      }
    );
  }
  IsRoleAlreadyExists(control: AbstractControl) {
   
    if (control.value=="Admin") {
      return { IsRoleExistsConditionFailed: true };
    }
    return null;
  }
  ngOnInit() {
  }

}
