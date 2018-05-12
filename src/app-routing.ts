import { NgModule } from '@angular/core'
import { RouterModule, Route } from '@angular/router'

import { QuestionPaperComponent } from '../src/app/question-paper/question-paper.component';

import { QuestionpaperuploadComponent } from './app/questionpaperupload/questionpaperupload.component';
import { ExamresultComponent } from './app/examresult/examresult.component';
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
import { ShowAllUsersComponent } from './app/admin/modules/master/add-user/show-all-users/show-all-users.component';
import { EdituserComponent } from './app/admin/modules/master/add-user/edituser/edituser.component';
import { CreateAssessmentComponent } from './app/admin/modules/assessment/create-assessment/create-assessment.component';
import { MapUserToAssessmentComponent } from './app/admin/modules/assessment/map-user-to-assessment/map-user-to-assessment.component';

const routes: Route[] = [
  {
    path: '',
    component: HomelayoutComponent, canActivate: [AuthGuard],
    children: [
     
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'master',
        component: AdmindashboardComponent,
        children:
          [
            {
              path: "AddUser",
              component: AddUserComponent
            },
            {
              path: "AddModule",
              component: AddmoduleComponent
            },
            {
              path: "AddPermission",
              component: PermissionsComponent
            },
            {
              path: "EditUser",
              component: EdituserComponent
            },
            {
              path: "ShowAllUsers",
              component: ShowAllUsersComponent
            },
            {
              path: "AddRole",
              component: AddRoleComponent
            },
            {
              path: "MapRoleModulePermission",
              component: RoleModulePermissionMapComponent
            }
            

           
          ]
      },
      {
        path: 'Assessment',
        component: AdmindashboardComponent,
        children:
          [
            {
              path: "UploadQuestionPaper",
              component: QuestionpaperuploadComponent
            },
            {
              path: "CreateAssessment",
              component: CreateAssessmentComponent
            },
            {
              path: "MapUserToAssessment",
              component: MapUserToAssessmentComponent
            }
           
           
           
           
           
          ]
      }
    ]

  }
  ,
  {
    path: '',
    component: LoginlayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }

    ]

  },
  {
    
      path: "StartExam",
      component: QuestionPaperComponent,canActivate: [AuthGuard]
    
  },
  {
    
    path: "ExamResult",
    component: ExamresultComponent
  
}
];
@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {

}