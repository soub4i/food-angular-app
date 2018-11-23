import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string = "";
  password : string = "";

  errorMessage: string = "";

  constructor(

    private authService:AuthenticationService,
    private router : Router

  ) { }

  ngOnInit() {

    let user = JSON.parse(localStorage.getItem('currentUser'));

    if(user){
    
      this.router.navigate(['/foods']);
    }
    
  }

  onLogin(){

    this.errorMessage = "";
  

    this.authService.login(this.username,this.password).subscribe(
      user => {
        
        console.log(user);

        if(user){

          this.router.navigate(['/foods'])

        }

      }, 
      err => {
        this.errorMessage = err.message || "Unauthorized Action" ; 
      }
    )


  }


}
