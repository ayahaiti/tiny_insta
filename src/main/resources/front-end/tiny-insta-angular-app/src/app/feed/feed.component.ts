import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {Post} from "./Post";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy{

  postList: Post[];

  interval: any = null;

  constructor(private notifierService: NotifierService, private userService: UserService) { }

  ngOnInit() {
    this.retrieveLastPosts();
    var thiObj = this;
    this.interval = setInterval(function () {
      thiObj.retrieveLastPosts();
    }, 6000);
  }

  retrieveLastPosts(){
    this.userService.getLastPosts().subscribe(
      response => this.doOnPostsRetrievedOk(response),
        error => this.doOnPostsRetrievedKo(error)
    );
  }

  private doOnPostsRetrievedOk(response) {
    if(response.error=="username_token_ko"){
      this.notifierService.notify("error","your token is ko, please disconnect and reconnect !");
    }
    else{
      this.postList = response.tempPostPojoList;
    }
  }

  private doOnPostsRetrievedKo(error) {
    this.notifierService.notify("error","unknown error ! we are working to fix it!");
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
