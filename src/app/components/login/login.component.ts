import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isUserLogged: boolean = false;

  constructor(private authService: UserAuthService, private router: Router) {

  }
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }


  login() {

    this.authService.login('userName', 'password');
    this.isUserLogged = this.authService.isUserLogged;

    this.router.navigate(['/home']);
  }



}
