import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload/fileupload.component';



@NgModule({
  imports: [
    CommonModule,HttpClientModule
  ],
  declarations: [FileuploadComponent],
  exports: [ FileuploadComponent ,HttpClientModule]
})
export class UploadFileModuleModule { }
