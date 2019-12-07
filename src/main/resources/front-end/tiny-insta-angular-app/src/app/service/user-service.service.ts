import
{ Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RegisterFormInput} from "../register/RegisterFormInput";
import {LoginFormInput} from "../login/LoginFormInput";
import {FindUserInput} from "../search/FindUserInput";
import {GetUserFollowersInput} from "../search/GetUserFollowersInput";
import {FollowInput} from "../search/FollowInput";
import {CheckFollowedInut} from "../search/CheckFollowedInut";
import {UnfollowInput} from "../search/UnfollowInput";
import {GetLastPostsInput} from "../feed/GetLastPostsInput";


@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private registerUserUrl = "/user/create";
  private connectUserUrl = "/user/connect";
  private findUserUrl = "/user/find";
  private getLastPostsUrl = "/post/get";
  private  getFolllowers = "/follower/count";
  private follow = "/follower/add";
  private checkFollower = "/follower/check";
  private unfollowUser = "/follower/delete";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  registerUser(body: RegisterFormInput){
    return this.httpClient.post(this.registerUserUrl, body, this.httpOptions);
  }

  getLastPosts(){
    return this.httpClient.post(
      this.getLastPostsUrl,
      new GetLastPostsInput(
        localStorage.getItem('username'),
        localStorage.getItem('token')
      ),
      this.httpOptions);
  }

  connectUser(body: LoginFormInput){
    return this.httpClient.post(this.connectUserUrl, body, this.httpOptions);
  }

  findUser(body: FindUserInput) {
    return this.httpClient.post(this.findUserUrl, body, this.httpOptions);
  }

  getUserFollowers(body: GetUserFollowersInput) {
    return this.httpClient.post(this.getFolllowers, body, this.httpOptions);
  }

  followUser(body: FollowInput) {
    return this.httpClient.post(this.follow, body, this.httpOptions);
  }

  checkUsernameIsFollowed(body: CheckFollowedInut) {
    return this.httpClient.post(this.checkFollower, body, this.httpOptions);
  }

  unfollow( body: UnfollowInput) {
    return this.httpClient.post(this.unfollowUser, body, this.httpOptions);
  }

}
