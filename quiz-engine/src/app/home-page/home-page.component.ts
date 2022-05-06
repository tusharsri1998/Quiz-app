import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  // init the router and auth service
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}

  // route to the admin login form
  onAdminLogin(): void {
    this.router.navigateByUrl('admin/login');
  }

  aboutMe(){
    this.router.navigateByUrl('about');
  }
  // call the user login function created in the auth service
  // service functions returns a Promise of type boolean
  // if true then route to the user view
  // else display error via alert
  onUserLogin(): void {
    this.authService.authenticateUser().then((result) => {
      if (result) {
        this.router.navigateByUrl('user');
      } else {
        alert('Something went wrong');
      }
    });
  }
}
