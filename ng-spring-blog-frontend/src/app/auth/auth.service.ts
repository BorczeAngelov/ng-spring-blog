import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { RegisterPayload } from './register-payload';
import { LoginPayload } from './login-payload';
import { JwtAutResponse } from './JwtAutRespone';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/api/auth/";

  constructor(private httpClient: HttpClient, private localStoraqeService: LocalStorageService) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + "signup", registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload)
      .pipe(
        map(data => {
          this.localStoraqeService.store('authenticationToken', data.authenticationToken);
          this.localStoraqeService.store('username', data.username);
          return true;
        }));
  }
}
