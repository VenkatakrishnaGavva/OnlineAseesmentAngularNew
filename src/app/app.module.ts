import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { AnswerStatatusComponent } from './answer-statatus/answer-statatus.component';
import { HttpClientModule } from '@angular/common/http';
import {QuestionPaperService} from './question-paper/Shared/questionpaper.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatGridListModule,MatToolbarModule,MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {UploadFileModuleModule} from './upload-file-module/upload-file-module.module'


@NgModule({
  declarations: [
    AppComponent,
    CandidatedetailsComponent,
    QuestionPaperComponent,
    AnswerStatatusComponent
  ],
  providers: [HttpClient,QuestionPaperService],
  bootstrap: [AppComponent],
  imports:[UploadFileModuleModule,MatIconModule,MatProgressSpinnerModule,MatRadioModule, MatDividerModule,BrowserAnimationsModule,MatButtonModule,BrowserModule,MatGridListModule,HttpClientModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatSidenavModule],
  exports:[UploadFileModuleModule,MatIconModule,MatProgressSpinnerModule,MatRadioModule, MatDividerModule,BrowserAnimationsModule,MatButtonModule,BrowserModule,MatGridListModule,HttpClientModule,MatToolbarModule,MatCardModule,MatExpansionModule,MatSidenavModule]
  
})
export class AppModule { }
