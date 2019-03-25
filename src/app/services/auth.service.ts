import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { DatabaseSnapshot, DatabaseQuery } from 'angularfire2/database/interfaces';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private _firedata: AngularFireDatabase, private router: Router, public ngZone: NgZone) { 
      this.user = _firebaseAuth.authState;

      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }

  SignIn(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }


  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }


  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }


  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  loginAnonymous(): firebase.Promise<any> {
    return this._firebaseAuth.auth.signInAnonymously();
  }


  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  // SetUserData(user) {
  //   const userRef = this._firedata.database(`users/${user.uid}`);
  //   const userData: User = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL,
  //     emailVerified: user.emailVerified
  //   }
  //   return userRef.set(userData, {
  //     merge: true
  //   })
  // }
}
