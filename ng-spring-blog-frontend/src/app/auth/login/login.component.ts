import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginPayload } from '../login-payload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;

  constructor(
    private authService: AuthService,
    private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm) {
      this.loginPayload.username = this.loginForm.get('username')?.value;
      this.loginPayload.password = this.loginForm.get('password')?.value;

      console.log('calling log', this.loginPayload);

      this.authService.login(this.loginPayload)
        .subscribe(
          data => {
            console.log('login respone', data);

            if (data) {
              console.log('login success', data);
              this.router.navigateByUrl('/home');
            } else {
              console.log('Login failed');
            }
          },
          error => {
            console.log('Login failed', error);
          });
    }
  }
}