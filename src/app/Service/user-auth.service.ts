import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { RegisterResponse, User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  // ===== REGISTER =====
  register(userData: User): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(`${this.baseUrl}/register`, userData)
      .pipe(
        tap((res: RegisterResponse) => {
          const token = res.data.user.token;
          if (token) {
            localStorage.setItem('token', token);
            this.isLoggedSubject.next(true);
          }
        })
      );
  }

  // ===== LOGIN =====
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((res: any) => {
        const token = res?.data?.token;
        if (token) {
          localStorage.setItem('token', token);
          this.isLoggedSubject.next(true);
        }
      })
    );
  }

  // ===== LOGOUT =====
  logout() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getLoggedStatus(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
}
