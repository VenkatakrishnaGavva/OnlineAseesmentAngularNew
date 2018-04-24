import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../api.service';

@Injectable()
export class FileService {
     constructor(private http: HttpClient,private api:ApiService) { }

    upload(files,params) : Observable<any>{
    
 return this.api.PostUploadFiles("api/fileupload", files,params);

    }
   
}