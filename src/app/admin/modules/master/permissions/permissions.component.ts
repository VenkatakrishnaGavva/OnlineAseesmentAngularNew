import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  public permissionCreationForm:FormGroup;
  public moduleNameList  = [{moduleId:1,moduleName:'Master'},
                        {moduleId:2,moduleName:'Assessment'}
                       ];
  public permissionNameList  =[{permissionId:1,permissionName:'Add user'},
  {permissionId:2,permissionName:'Add role'},
  {permissionId:3,permissionName:'Add assessment'}
 ];
  constructor(private fb:FormBuilder) { 
    this.permissionCreationForm = this.fb.group(
      {
        PermissionName: ['', [Validators.required,this.IsPermissionAlreadyExists]],
        Description:['',Validators.required],
        ModuleNameList:[-1,Validators.required]
      }
    );
  }
  IsPermissionAlreadyExists(control: AbstractControl) {
   
    if (control.value=="Create Admin") {
      return { IsPermissionExistsConditionFailed: true };
    }
    return null;
  }
  ngOnInit() {
  }

}
