import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { AnswerStatatusComponent } from './answer-statatus/answer-statatus.component';
import { HttpClientModule } from '@angular/common/http';
import {QuestionPaperService} from './question-paper/Shared/questionpaper.service'
import {AuthService} from './auth/auth.service'
import {TokenInterceptor} from'../token.interceptor'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatGridListModule,MatToolbarModule,MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UploadFileModuleModule} from './upload-file-module/upload-file-module.module'
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { FileService } from './upload-file-module/services/fileupload.service';
import { QuestionpaperuploadComponent } from './questionpaperupload/questionpaperupload.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './auth/auth-guard.service'
import { AccountMangementService } from './login/Shared/accountmanagement.service';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme, OceanTheme);
import { Router, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from '../app-routing'; 
import { LocationStrategy } from '@angular/common/src/location/location_strategy';
import { PathLocationStrategy } from '@angular/common';
import { MasterComponent } from './admin/modules/master/master.component';
import { HomeComponent } from './home/home/home.component';

import { AddUserComponent } from './admin/modules/master/add-user/add-user.component';
import { MasterheaderComponent } from './admin/modules/master/header/masterheader/masterheader.component';
import { LoginlayoutComponent } from './layouts/loginlayout/loginlayout.component';
import { HomelayoutComponent } from './layouts/homelayout/homelayout.component';
import { TopnavbarComponent } from './layouts/navbars/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './layouts/navbars/sidenavbar/sidenavbar.component';
import { FooterComponent } from './layouts/navbars/footer/footer.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AddmoduleComponent } from './admin/modules/master/addmodule/addmodule.component';
import { AdmindashboardService } from './admin/admindashboard.service';
import { PermissionsComponent } from './admin/modules/master/permissions/permissions.component';
import { AddRoleComponent } from './admin/modules/master/add-role/add-role.component';
import { RoleModulePermissionMapComponent } from './admin/modules/master/role-module-permission-map/role-module-permission-map.component';
import { UserService } from './admin/modules/master/add-user/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidatedetailsComponent,
    QuestionPaperComponent,
    AnswerStatatusComponent,
    QuestionpaperuploadComponent,
    ExamresultComponent,
    LoginComponent,
    LoginlayoutComponent,
    HomelayoutComponent,
    MasterComponent,
    HomeComponent,
    AddUserComponent,
    MasterheaderComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    FooterComponent,
    AdmindashboardComponent,
    AddmoduleComponent,
    PermissionsComponent,
    AddRoleComponent,
    RoleModulePermissionMapComponent
  ],
  
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    
    multi: true
  },
  UserService, AdmindashboardService,HttpClient,QuestionPaperService,FileService,AuthService,AuthGuardService,AccountMangementService],
  bootstrap: [AppComponent],
  imports:[AppRoutingModule,SharedModule.forRoot(),FormsModule,ReactiveFormsModule, FusionChartsModule,UploadFileModuleModule,MatIconModule,MatProgressSpinnerModule,MatRadioModule, MatDividerModule,BrowserAnimationsModule,MatButtonModule,BrowserModule,MatGridListModule,HttpClientModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatSidenavModule
  ],
  exports:[UploadFileModuleModule,MatIconModule,MatProgressSpinnerModule,MatRadioModule, MatDividerModule,BrowserAnimationsModule,MatButtonModule,BrowserModule,MatGridListModule,HttpClientModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatSidenavModule]
  
})
export class AppModule { 

}
