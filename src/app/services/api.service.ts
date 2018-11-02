import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {Http, Headers} from '@angular/http';



@Injectable()
export class ApiService {

  resource: string = '';

  API_URL = environment.apiUrl;

  
  constructor(private http: Http) {


    

  }

  createAuthorizationHeader(headers: Headers) {

    let user = JSON.parse(localStorage.getItem('currentUser')) || null ;

    if(user && user.token){

      headers.append('Authorization', 'Bearer ' + user.token); 

    }

  
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.API_URL+'/'+url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.API_URL+'/'+url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(this.API_URL+'/'+url, data, {
      headers: headers
    });
  }

  delete(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(this.API_URL+'/'+url, {
      headers: headers
    });
  }
 
}