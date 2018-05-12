import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { PermisssionService } from './services/permisssion.service';
import { AccountMangementService } from '../../../../login/Shared/accountmanagement.service';


@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  public permissionCreationForm:FormGroup;
  public moduleNameList :any[] = [
                       ];
  public isPermissionCreated:boolean=false;
  
  constructor(private fb:FormBuilder, private permissionService:PermisssionService, private accountService:AccountMangementService) { 
    this.permissionCreationForm = this.fb.group(
      {
        PermissionName: ['', [Validators.required,this.IsPermissionAlreadyExists]],
        Description:['',Validators.required],
        ModuleId:[-1,Validators.required]
      }

    );

    this.permissionService.GetAllModules().subscribe(
      response=>{
        this.moduleNameList = response;
      }
    )
  }

  PostFormData()
  {
   if(this.permissionCreationForm.valid)
   {
   let formdata = this.permissionCreationForm.value;
   
         formdata.CreatedBy =  sessionStorage.getItem("userid");
       
     this.permissionService.PostFormData(formdata).subscribe(
       result=>{
        this.permissionCreationForm.reset();
        this.isPermissionCreated=true;
        
       }
     )
   }
  }
  IsPermissionAlreadyExists(control: AbstractControl) {
   
    // if (null) {
    //   return { IsPermissionExistsConditionFailed: true };
    // }
    // return null;
  }
  ngOnInit() {
  }

}
