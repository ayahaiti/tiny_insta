import {Component} from '@angular/core';
import {RegisterFormInput} from "./RegisterFormInput";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  email: string = null;
  username: string = null;
  password: string = null;

  inputForm : RegisterFormInput = new RegisterFormInput();

  constructor (private notifierService: NotifierService, private userService: UserService, private router: Router){
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
  }

  onEmailChanged(data){
    console.log(data);
    this.email = data.trim();
    this.inputForm.email = this.email;
  }

  onUsernameChanged(data){
    console.log(data);
    this.username = data.trim();
    this.inputForm.username = this.username;
  }

  onPasswordChanged(data){
    console.log(data);
    this.password = data.trim();
    this.inputForm.password = this.password;
  }

  onUserRegistrationSucceded(response){
    $('#myModal').modal('hide');
    if(response.error == "username_used"){
      this.notifierService.notify("warning", "Username exists already!");
      console.log("username used!");
    }
    else{
      this.notifierService.hideAll();
      this.notifierService.notify("success", "Registration complete!");
      this.router.navigateByUrl('/login');
    }
  }

  onUserRegistrationFailed(error){
    $('#myModal').modal('hide');
    this.notifierService.notify("error", "Unknown error! We are working on it!");
  }

  onUserRegisterButtonClicked(){
    if(this.inputForm.username=="" || this.inputForm.username==null ||
      this.inputForm.password=="" || this.inputForm.password==null ||
      this.inputForm.email=="" || this.inputForm.email==null){
      this.notifierService.notify("warning", "Form incomplete ! the white spaces are ignored! Incorrect input !");
    }
    else{
      $('#myModal').modal('show');
      this.userService.registerUser(this.inputForm).subscribe(response => this.onUserRegistrationSucceded(response),
        error => this.onUserRegistrationFailed(error));
    }

  }

  goToLogin() {
    this.router.navigateByUrl('/#/login');
  }
}
