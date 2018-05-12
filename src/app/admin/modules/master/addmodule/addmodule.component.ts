import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../add-user/services/user.service';
import { ModuleService } from './services/module.service';
import { AccountMangementService } from '../../../../login/Shared/accountmanagement.service';

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {
  public moduleCreationForm:FormGroup;
 public isModuleCreationSuccess:boolean =false;
  constructor(private fb:FormBuilder,private moduleService:ModuleService,private accountService:AccountMangementService ) {
    this.moduleCreationForm = this.fb.group(
      {
        ModuleName: ['', [Validators.required,this.IsModuleAlreadyExists]],
        Description:['',Validators.required]
      }
    );
   }
   IsModuleAlreadyExists(control: AbstractControl) {
   
    if (control.value=="Master1") {
      return { IsModuleExistsConditionFailed: true };
    }
    return null;
  }
  PostModuleCreationSubmitted(data:any)
  {
   if(this.moduleCreationForm.valid)
   {
    let moduleFormData = data.value;
  
   moduleFormData.CreatedBy =  sessionStorage.getItem("userid");
    this.moduleService.PostFormData(moduleFormData).subscribe(

  response=>{
this.isModuleCreationSuccess = true;

   this.moduleCreationForm.reset();
  }
);
   }
 
}
ngOnInit() {
}

}
