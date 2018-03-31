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
import {QuestionPaperAppRoutingModule} from '../app-questionpaperroutingmodule'

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
import { AccountMangementService } from './login/Shared/accountmanagementservice.service';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme, OceanTheme);
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    CandidatedetailsComponent,
    QuestionPaperComponent,
    AnswerStatatusComponent,
    QuestionpaperuploadComponent,
    ExamresultComponent,
    LoginComponent,
    HeaderComponent
  ],
  
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },HttpClient,QuestionPaperService,FileService,AuthService,AuthGuardService,AccountMangementService],
  bootstrap: [AppComponent],
  imports:[QuestionPaperAppRoutingModule,FormsModule,FusionChartsModule,UploadFileModuleModule,MatIconModule,MatProgressSpinnerModule,MatRadioModule, MatDividerModule,BrowserAnimationsModule,MatButtonModule,BrowserModule,MatGridListModule,HttpClientModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatSidenavModule],
  exports:[UploadFileModuleModule,MatIconModule,MatProgressSpinnerModule,MatRadioModule, MatDividerModule,BrowserAnimationsModule,MatButtonModule,BrowserModule,MatGridListModule,HttpClientModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatSidenavModule]
  
})
export class AppModule { 

}
