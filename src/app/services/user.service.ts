import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ApiService } from './api.service';

const API_URL = environment.apiUrl;

@Injectable()
export class UserService {

  resource: string = 'users';

  
  constructor(private api: ApiService) {

    
  }

  public getAll(): Observable<any>{
    return this.api
      .get(API_URL + '/'+this.resource);
  }

  public create(data: any): Observable<any> {
    return this.api
      .post(API_URL + '/'+this.resource, data);
  }

 

 
}