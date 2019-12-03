import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterFormInput} from "../register/RegisterFormInput";
import {LoginFormInput} from "../login/LoginFormInput";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private registerUserUrl = "/user/create";
  private connectUserUrl = "/user/connect";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  registerUser(body: RegisterFormInput){
    return this.httpClient.post(this.registerUserUrl, body, this.httpOptions);
  }

  connectUser(body: LoginFormInput){
    return this.httpClient.post(this.connectUserUrl, body, this.httpOptions);
  }
}
