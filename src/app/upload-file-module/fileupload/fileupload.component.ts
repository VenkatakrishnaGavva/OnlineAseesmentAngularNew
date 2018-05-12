import { Component, OnInit,Input } from '@angular/core';
import {FileService} from '../services/fileupload.service';




@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  private formData: FormData = new FormData();
@Input()  InputFormData : any ;

  constructor(private fileService:FileService) { }

  ngOnInit() {
  }
  OnFileUpload(event:any)
  {
    let files = event.target.files; 

    if (files.length > 0) {
  
      for (var j = 0; j < files.length; j++) {
          this.formData.append("file[]", files[j], files[j].name);
      }
      
    }
      
  }
  

OnSubmitClick()
{
  var parameters = this.InputFormData;
  debugger;
  this.fileService.upload(this.formData,parameters)
  .subscribe(
  success => {
   
    console.log(success)
  },
  error => {
      
      
  })
}












   
   
  }


