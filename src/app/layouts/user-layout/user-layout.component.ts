import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  user:any = null ;

  isConnected: boolean = false ;

  constructor(private router:Router) { }

  ngOnInit() {

    this.user = JSON.parse(localStorage.getItem('currentUser'));

    if(this.user){
      this.isConnected = true;
    }

  }

  logout(){

    localStorage.removeItem('currentUser');

    this.router.navigate(['/auth/login']);


  }

}
