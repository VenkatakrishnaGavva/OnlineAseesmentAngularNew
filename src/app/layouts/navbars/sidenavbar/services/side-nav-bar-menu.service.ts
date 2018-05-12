import { Injectable } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SideNavBarMenuService {

  constructor(private api:ApiService) {


   }

   public GetModuleWiseMenuPagesForAccess(roleId:string):Observable<any>
   {
return this.api.get("api/GetAllMenuPagesForRole?roleId="+roleId);
   }

}
