import {NgModule} from '@angular/core'
import {RouterModule,Route} from '@angular/router'

 import { QuestionPaperComponent }  from '../src/app/question-paper/question-paper.component';

 import { QuestionpaperuploadComponent }  from './app/questionpaperupload/questionpaperupload.component';
import {ExamresultComponent} from'./app/examresult/examresult.component';
import { AuthGuardService as AuthGuard } from './app/auth/auth-guard.service';
import { LoginComponent } from './app/login/login.component';

import { APP_BASE_HREF } from '@angular/common';
import { MasterComponent } from './app/admin/modules/master/master.component';
import { HomeComponent } from './app/home/home/home.component';
import { AddUserComponent } from './app/admin/modules/master/add-user/add-user.component';
import { HomelayoutComponent } from './app/layouts/homelayout/homelayout.component';
import { LoginlayoutComponent } from './app/layouts/loginlayout/loginlayout.component';
import { AdmindashboardComponent } from './app/admin/admindashboard/admindashboard.component';
import { AddmoduleComponent } from './app/admin/modules/master/addmodule/addmodule.component';
import { PermissionsComponent } from './app/admin/modules/master/permissions/permissions.component';
import { AddRoleComponent } from './app/admin/modules/master/add-role/add-role.component';
import { RoleModulePermissionMapComponent } from './app/admin/modules/master/role-module-permission-map/role-module-permission-map.component';

const routes: Route[] = [
  { path: '', 
  component: HomelayoutComponent, canActivate:[AuthGuard],
  children:[
    {   
      path: '',
      component: HomeComponent  
    },
    {   
      path: 'dashboard',
      component: AdmindashboardComponent,
      children:
      [
        {
          path:"master",
          children:[
            {
              path:"AddUser",
          component:AddUserComponent
            },
            {
              path:"AddModule",
              component:AddmoduleComponent
            },
            {
              path:"AddPermission",
              component:PermissionsComponent
            },
            {
              path:"AddRole",
              component:AddRoleComponent
            },
            {
              path:"MapRoleModulePermission",
              component:RoleModulePermissionMapComponent
            }
          ]
        }
      ] 
      
    }
        
  ]
 },
 { path: '', 
      component: LoginlayoutComponent ,
      children:[
        {
          path:'login',
          component:LoginComponent
         }

      ]
  
  }
];
@NgModule({
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule 
{

}