import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginFormInput} from "./LoginFormInput";
import {UserService} from "../service/user.service";
import {NotifierService} from "angular-notifier";

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private notifierService: NotifierService, private router: Router, private userService: UserService) {}

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
    if(this.username=="" || this.username==null ||
      this.password=="" || this.password==null){
      this.notifierService.notify("warning", "Form incomplete ! Incorrect input !");
    }
    else{
      $('#myModal').modal('show');
      this.loginFormInput.password = this.password;
      this.loginFormInput.username = this.username;
      this.userService.connectUser(this.loginFormInput).subscribe(response => this.onUserLoginSucceeded(response),
        error => this.onUserLoginFailed(error));
    }
  }


  private onUserLoginSucceeded(response) {
    $('#myModal').modal('hide');
    if(response.error!=null){
      this.notifierService.notify("warning","username or password incorrect !");
    }
    else{
      localStorage.setItem('username', response.username);
      localStorage.setItem('token', response.token);
      this.notifierService.hideAll();
      this.notifierService.notify("success","Welcome !");
      this.router.navigateByUrl('/dashboard');
    }
  }

  private onUserLoginFailed(error) {
    this.notifierService.notify("error","unknown error! we are working on it !");
    $('#myModal').modal('hide');
  }
}
