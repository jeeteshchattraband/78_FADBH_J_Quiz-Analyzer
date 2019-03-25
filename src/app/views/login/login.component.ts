import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  loginWithEmail(email:string, password:string){
    // console.log(email,password);
    this.authService.SignIn(email, password)
      .then((res) => { 
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
  }


   signInWithTwitter() {
      this.authService.signInWithTwitter()
      .then((res) => { 
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }


    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }


    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }



  ngOnInit() {
  }

}
