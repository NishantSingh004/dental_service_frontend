import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface LoginResponse {
  token: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private httpClient = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  public user: any;

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public login(userObj: any): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${this.apiUrl}/auth/login`,
      userObj,
      {
        withCredentials: true,
      }
    );
  }

  public createAccount(userObj: any) {
    return this.httpClient.post(`${this.apiUrl}/users/add-user`, userObj, {
      withCredentials: true,
    });
  }
}
