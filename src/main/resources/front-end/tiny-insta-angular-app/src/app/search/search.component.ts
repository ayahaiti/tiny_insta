import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user-service.service";
import {FindUserInput} from "./FindUserInput";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  buttonActif: boolean = true;

  username: string = null;

  output = {
    username: null,
    countOfFollowers: null
  };

  constructor( private userService: UserService) {}

  ngOnInit(): void {
  }

  callFindUser() {
    this.userService.findUser( new FindUserInput(
      localStorage.getItem("username"),
      this.username,
      localStorage.getItem("token"))
    ).subscribe( response => this.doOnSearchSuccessful(response), error => this.doOnSearchUnsuccessful(error));
  }

  private doOnSearchSuccessful(response: any) {
    this.output.username = response.userEntity.username;
  }

  private doOnSearchUnsuccessful(error: any) {

  }
}
