import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) { 

        this.http.head('')
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, { email: username, password : password })
            .pipe(map(data => {

                if (data && data.user) {
                    localStorage.setItem('currentUser', JSON.stringify(data.user));
                }

                return data.user;
            }));
    }

    getCurrentUser(){

      return Observable.create(observer =>{

          observer.next(localStorage.getItem('currentUser'));

      });

      

    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}