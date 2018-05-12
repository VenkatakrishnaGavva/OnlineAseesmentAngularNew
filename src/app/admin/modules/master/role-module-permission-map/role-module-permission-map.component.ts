import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { ModuleWisePageAccessModel } from './Models/ModuleWisePermissionsModel';
import { ModuleModel } from './Models/ModuleModel';
import { PageModel } from './Models/PageModel';
import { RoleModulePermissionMapService } from './services/role-module-permission-map.service';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/zip";
import { RoleModel } from './Models/RoleModel';

@Component({
  selector: 'app-role-module-permission-map',
  templateUrl: './role-module-permission-map.component.html',
  styleUrls: ['./role-module-permission-map.component.css']
})

export class RoleModulePermissionMapComponent implements OnInit {
  public mapModuleWisePageAccessForm:FormGroup;
  public RoleNameList :any[] = [
  ];
  public moduleWisePageAcccessModelList: ModuleWisePageAccessModel[] = [];

 
  constructor(private fb:FormBuilder,private roleModulePermissionMapService:RoleModulePermissionMapService  ) { 



Observable.zip(this.roleModulePermissionMapService.GetAllROles(), this.roleModulePermissionMapService.GetModulewisePages())
        .subscribe(([response1, response2]) => {
          this.RoleNameList = response1;
          for(let moduleWiseAccessModel of response2 )
    {
  let moduleWisePageAccessModel = new ModuleWisePageAccessModel();
  moduleWisePageAccessModel.Module= new ModuleModel();
  moduleWisePageAccessModel.Module.ModuleId = moduleWiseAccessModel.Module.ModuleId;
  moduleWisePageAccessModel.Module.ModuleName = moduleWiseAccessModel.Module.ModuleName;
  let pageList:PageModel[]=[];
  for(let page of moduleWiseAccessModel.pageList)
  {
    let pageModel = new PageModel();
    pageModel.PageId = page.PageId;
    pageModel.PageName = page.PageName;
    pageList.push(pageModel);
  }
  moduleWiseAccessModel.pageList= pageList;
 
  this.moduleWisePageAcccessModelList.push(moduleWiseAccessModel);
    }
    
  
        });
 
    this.mapModuleWisePageAccessForm = this.fb.group(
      {
        RoleId: [-1, [Validators.required]],
        ModulewisePageList:new FormArray([])
      });
     
  }

  ngOnInit() {
  }
  SelectAllCheckBox(moduleName:string,$event:any)
  {
  
   for(let moduleWisePageAccessModel of this.moduleWisePageAcccessModelList)
   {
     if(moduleWisePageAccessModel.Module.ModuleName==moduleName)
     {
       for(let page of moduleWisePageAccessModel.pageList)
       {
        page.IsPageSelected= $event.target.checked;
       }
     }
   }
   }

   public   MapModuleRolePermMap()
   {
    this.moduleWisePageAcccessModelList[0].Role = new RoleModel();
this.moduleWisePageAcccessModelList[0].Role.RoleId=   this.mapModuleWisePageAccessForm.value.RoleId
  

   this.roleModulePermissionMapService.MapModuleWisePageAccessWithRole(this.moduleWisePageAcccessModelList).subscribe(
     response=>{
      
     }
   );
    
   }
   public OnPageCheckBoxChange($event:any, PermissionId:any,moduleName:any)
   { 
   
    for(let moduleWisePageaccess of this.moduleWisePageAcccessModelList)
    {
      if(moduleWisePageaccess.Module.ModuleName==moduleName )
      {
        for(let page of moduleWisePageaccess.pageList)
        {
          if(page.PageId == PermissionId)
          {
            page.IsPageSelected= $event.target.checked;
          }
        }
      }
    }
    
   }
  
}
