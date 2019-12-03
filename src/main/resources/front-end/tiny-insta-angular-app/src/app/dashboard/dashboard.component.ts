import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    if (token == null && username == null) {
      this.router.navigateByUrl('/login');
    }
  }

}
