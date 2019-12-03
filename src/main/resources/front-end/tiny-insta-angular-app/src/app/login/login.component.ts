import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginFormInput} from "./LoginFormInput";
import {UserService} from "../service/user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {}

  username: string;
  password: string;

  loginFormInput: LoginFormInput = new LoginFormInput();

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if (token != null && username != null) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  connectUser(){
    this.loginFormInput.password = this.password;
    this.loginFormInput.username = this.username;
    this.userService.connectUser(this.loginFormInput).subscribe(response => this.onUserLoginSucceded(response),
      error => this.onUserLoginFailed(error));
  }


  private onUserLoginSucceded(response) {
    localStorage.setItem('username', response.username);
    localStorage.setItem('token', response.token);
    this.router.navigateByUrl('/dashboard');
  }

  private onUserLoginFailed(error) {

  }
}
