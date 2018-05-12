import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../../../../api.service';

@Injectable()
export class RoleModulePermissionMapService {

  constructor(private api:ApiService) { }

 public GetModulewisePages():Observable<any>
 {
  return this.api.get("api/GetModulewisePages");
 }
 public GetAllROles():Observable<any>
 {
  return this.api.get("api/GetAllRoles");
 }

 public MapModuleWisePageAccessWithRole( formData:any):Observable<any>
 {
  
  return this.api.Post("api/MapModuleWisePageAccessWithRole",formData);
 }
}

