import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  resource: string = '';

  
  constructor(private http: Http) {
    

  }

  public getAll(): Observable<any>{
    return this.http
      .get(API_URL + '/'+this.resource);
  }

  public create(data: any): Observable<any> {
    return this.http
      .post(API_URL + '/'+this.resource, data);
  }

  public getById(id: number): Observable<any> {
    return this.http
      .get(API_URL + '/'+this.resource + '/' + id);
  }

  public update(data: any): Observable<any> {
    return this.http
      .put(API_URL + '/'+this.resource + '/'  + data.id, data);
      
  }

  public delete(id: number): Observable<any> {
    return this.http
      .delete(API_URL + '/'+this.resource + '/'  + id);

  }

 
}