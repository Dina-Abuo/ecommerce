import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isUserLogged: boolean = false;
  loginForm: FormGroup = new FormGroup({});
  constructor(private authService: UserAuthService, private router: Router) {}
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe({
        next: (res) => {
          console.log('Logged in', res);
          this.isUserLogged = this.authService.isUserLogged;
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log('Login failed', error);
        },
      });
  }
}
