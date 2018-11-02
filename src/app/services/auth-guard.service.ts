import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {

      let user = JSON.parse(localStorage.getItem('currentUser')) || null ;

        if(!user || !user.token){

            this.router.navigate(['/auth/login']);

        }


    return true;
  }
}