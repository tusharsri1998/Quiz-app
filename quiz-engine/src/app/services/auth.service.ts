// authentication service file
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
// base user model
interface User {
  name: string;
  email: string;
  uid: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // admin user for the app
  admin: any;
  

  // variable to store the user for the current state of the app
  user: User;

  // init the firebase auth service
  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore
  ) {
    this.getData();
  }
  // helper function to retrive the admin information when the app loads

  getData(): void {
    this.afStore
      .collection('admin-users')
      .snapshotChanges()
      .subscribe((res) => {
        this.admin = res[0].payload.doc.data();
        // console.log(this.admin)
      });
  }


  
  // admin login function called from the admin-login component
  authenticateAdminLogin(email: string, password: string): any {

    // if (email === this.admin.email && password === this.admin.password) {
    //   localStorage.setItem('token', this.admin.token);
    //   return true;
    // } else {
    //   return false;
    // }

    if (email == 'tushar98@bu.edu' && password == '12345') {
      localStorage.setItem('token', this.admin);
      return true;
    } else {
      return false;
    }

  }

  // called from the home-page component
  // function to login the user via outh on firebase
  async authenticateUser(): Promise<boolean> {
    const result = await this.afAuth.signInWithPopup(
      new auth.GoogleAuthProvider()
    );

    // if a user is created then create the user state
    // and return true
    // else return false
    if (result.user.uid) {
      this.user = {
        name: result.user.displayName,
        email: result.user.email,
        uid: result.user.uid,
      };
      return true;
    }
    return false;
  }

  // empty the user variable on logout
  // and log the user out from firebase
  userLogout(): boolean {
    this.user = null;
    this.afAuth.signOut();
    return true;
  }
}
