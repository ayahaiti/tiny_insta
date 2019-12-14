import {Component} from '@angular/core';
import {RegisterFormInput} from "./RegisterFormInput";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

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

  buttonActif: boolean = true;

  inputForm : RegisterFormInput = new RegisterFormInput();

  constructor (private userService: UserService, private router: Router){
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

  onUserRegistrationSucceded(){
    $('#myModal').modal('hide');
    this.buttonActif = true;
    this.router.navigateByUrl('/login');
  }

  onUserRegistrationFailed(){
    $('#myModal').modal('hide');
    this.buttonActif = true;
    // TODO show error message
  }

  onUserRegisterButtonClicked(){
    if(this.inputForm.username=="" || this.inputForm.username==null ||
      this.inputForm.password=="" || this.inputForm.password==null ||
      this.inputForm.email=="" || this.inputForm.email==null){
      // TODO show error
    }
    else{
      this.buttonActif = false;
      $('#myModal').modal('show');
      this.userService.registerUser(this.inputForm).subscribe(response => this.onUserRegistrationSucceded(),
        error => this.onUserRegistrationFailed());
    }

  }

  goToLogin() {
    this.router.navigateByUrl('/#/login');
  }
}
