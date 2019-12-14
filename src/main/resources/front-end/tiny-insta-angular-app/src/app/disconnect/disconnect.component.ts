import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

declare var $: any;

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
    $('#myModal').modal('show');
    this.userService.disconnect().subscribe(
      response => this.disconnectSuccessful(response),
      error => this.disconnectUnsuccessful(error)
    );
  }

  private disconnectUnsuccessful(response: any) {
    $('#myModal').modal('hide');
    // TODO
  }

  private disconnectSuccessful(error: any) {
    $('#myModal').modal('hide');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
