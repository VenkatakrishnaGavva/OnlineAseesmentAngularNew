import { ModuleModel } from "./ModuleModel";

import { RoleModel } from "./RoleModel";
import { PageModel } from "./PageModel";

export class ModuleWisePageAccessModel
{
    Page:PageModel;
     Module:ModuleModel;
 Role:RoleModel;
 pageList:PageModel[] =[];
}