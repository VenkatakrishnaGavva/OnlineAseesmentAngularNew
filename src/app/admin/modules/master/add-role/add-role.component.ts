import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})

export class AddRoleComponent implements OnInit {
  public roleCreationForm:FormGroup;
  public IsRoleCreated:boolean = false;
  constructor(private fb:FormBuilder, private api:ApiService) { 
  
    this.roleCreationForm = this.fb.group(
      {
        RoleName: ['', [Validators.required,this.IsRoleAlreadyExists]],
        Description:['',Validators.required]
      }
    );
  }
  IsRoleAlreadyExists(control: AbstractControl) {
   
    // if (control.value=="Admin") {
    //   return { IsRoleExistsConditionFailed: true };
    // }
    // return null;
  }
  ngOnInit() {
  }

  PostFormData()
  {
    if(this.roleCreationForm.valid)
    {
      let roleFormData = this.roleCreationForm.value;
      roleFormData.CreatedBy = sessionStorage.getItem("userid");
      this.api.Post("api/CreateRole",roleFormData).subscribe(

        response=>
        {
          this.IsRoleCreated = true;
        }
      )
    }
  }

}
