import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
  }

  disconnectUser() {
    this.userService.disconnect().subscribe(
      response => this.disconnectSuccessful(response),
      error => this.disconnectUnsuccessful(error)
    );
  }

  private disconnectUnsuccessful(response: any) {
    // TODO
  }

  private disconnectSuccessful(error: any) {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
