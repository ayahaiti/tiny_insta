import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterFormInput} from "../register/RegisterFormInput";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private registerUserUrl = "/user/create";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  registerUser(body: RegisterFormInput){
    return this.httpClient.post(this.registerUserUrl, body, this.httpOptions);
  }
}
