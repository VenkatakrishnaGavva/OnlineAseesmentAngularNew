import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FileService {
    _baseURL: string = 'http://onlineassessmentappwebapi20180312085836.azurewebsites.net/api/'
    constructor(private http: HttpClient) { }

    upload(files,params){
  
        // options.params = parameters;
        return  this.http.post(this._baseURL + 'fileupload', files,{params:params })
                 .map(response => alert(response) )
                 .catch(error => Observable.throw(error));

    }
    getImages(){
        return this.http.get(this._baseURL + "getimages")
                   .map(response =>alert(response))
                   .catch(error => Observable.throw(error));
    }
}