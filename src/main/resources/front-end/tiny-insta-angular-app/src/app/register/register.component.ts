import {Component} from '@angular/core';
import {RegisterFormInput} from "./RegisterFormInput";
import {UserService} from "../service/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent {

  email: string = null;
  username: string = null;
  password: string = null;

  buttonActif: boolean = true;

  inputForm : RegisterFormInput = new RegisterFormInput();

  constructor (private userService: UserService, private router: Router){
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
    this.buttonActif = true;
    this.router.navigate(['/login'])
  }

  onUserRegistrationFailed(){
    this.buttonActif = true;
    // TODO show error message
  }

  onUserRegisterButtonClicked(){
    this.buttonActif = false;
    this.userService.registerUser(this.inputForm).subscribe(response => this.onUserRegistrationSucceded(),
      error => this.onUserRegistrationFailed());
  }

}
