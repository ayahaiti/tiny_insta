import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user-service.service";
import {Post} from "./Post";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postList: Post[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.retrieveLastPosts();
  }

  retrieveLastPosts(){
    this.userService.getLastPosts().subscribe(
      response => this.doOnPostsRetrievedOk(response),
        error => this.doOnPostsRetrievedKo(error)
    );
  }

  private doOnPostsRetrievedOk(response) {
    this.postList = response.tempPostPojoList;
  }

  private doOnPostsRetrievedKo(error) {

  }
}
