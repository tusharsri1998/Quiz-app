import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: any;

  constructor(private router: Router, private authService: AuthService) {
    if(authService.user){
        this.user = authService.user;
    }
  }

  ngOnInit(): void {}
//logout function
  onLogout(): void {
    if (this.authService.userLogout) {
      this.router.navigateByUrl('');
    } else {
      alert('Something went wrong');
    }
  }
}
