import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-role-module-permission-map',
  templateUrl: './role-module-permission-map.component.html',
  styleUrls: ['./role-module-permission-map.component.css']
})
export class RoleModulePermissionMapComponent implements OnInit {
  public mapRoleModulePermissionForm:FormGroup;
 

  public modulePermissionList = [{
    ModuleId:1,ModuleName:"Master",PermissionList:[{PermissionId:1,PermissionName:"AddUser" },
    {PermissionId:2,PermissionName:"AddRole" },
    {PermissionId:3,PermissionName:"AddPermission" }
  
  ]
  },
  {
    ModuleId:2,ModuleName:"Assessment",PermissionList:[{PermissionId:4,PermissionName:"Create Assessment" },
    {PermissionId:5,PermissionName:"Create Questionpaper" }
  
  
  ]
  }

];
  constructor(private fb:FormBuilder) { 

    this.mapRoleModulePermissionForm = this.fb.group(
      {
        RoleName: [-1, [Validators.required]],
        RoleModulePermission:[-1,Validators.required]
      });
  }

  ngOnInit() {
  }
SelectAllCheckBox(checkboxid:string)
{
  alert(checkboxid);
 document.getElementById(checkboxid).setAttribute("checked","true");
}
}
