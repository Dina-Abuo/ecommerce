import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Service/user-auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authService: UserAuthService, private router: Router) {
  }
  ngOnInit(): void {

    // this.isUserLogged = this.authService.isUserLogged
    this.authService.getLoggedStatus().subscribe(status => this.isUserLogged = status);
  }
  logout() {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
    this.router.navigate(['/home'])
  }



}

