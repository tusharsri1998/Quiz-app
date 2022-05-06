import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  admin: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private _service: AdminService
  ) {
    this.admin = this.authService.admin;
  }

  ngOnInit(): void {
  }

  onLogout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
  }


}
