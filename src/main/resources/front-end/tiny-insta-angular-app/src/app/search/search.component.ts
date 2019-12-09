import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {FindUserInput} from "./FindUserInput";
import {GetUserFollowersInput} from "./GetUserFollowersInput";
import {FollowInput} from "./FollowInput";
import {CheckFollowedInut} from "./CheckFollowedInut";
import {UnfollowInput} from "./UnfollowInput";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  followButtonEnabled: boolean = true;
  unfollowButtonEnabled: boolean = true;
  searchButtonEnabled: boolean = true;

  username: string = null;

  userExists: boolean = false;
  iFollowHim: boolean = false;

  output = {
    username: null,
    errorMessage: null,
    countOfFollowers: null
  };

  constructor( private userService: UserService) {}

  ngOnInit(): void {
    var thiObj = this;
    setInterval(function () {
      if( thiObj.userExists ){
        thiObj.getNbOfFollowers();
      }
    }, 2000);
  }

  findUserAndNbOfFollowers() {
    this.findUser();
  }

  getNbOfFollowers() {
      this.userService.getUserFollowers(
        new GetUserFollowersInput(
          this.output.username
        )
      ).subscribe(response => this.doAfterNbrFollowersOk(response), error => this.doAfterNbrFollowersKo(error));
  }

  findUser() {
    this.searchButtonEnabled = false;
    this.userService.findUser( new FindUserInput(
      localStorage.getItem("username"), localStorage.getItem("token"), this.username
    )).subscribe( response => this.doAfterUserFound(response), error => this.doAfterUserNotFound(error));
  }

  private doAfterUserFound(response: any) {
    this.userExists = true;
    this.output.errorMessage = null;
    this.output.username = response.userEntity.username;
    this.searchButtonEnabled = true;
    this.checkIfFollowed();
    this.getNbOfFollowers();
  }

  private doAfterUserNotFound(error: any) {
    this.searchButtonEnabled = true;
    this.userExists = false;
    this.output.errorMessage = "User not found!";
  }

  private doAfterNbrFollowersOk(response: any) {
    this.output.countOfFollowers = response.nbOfFollowers;
  }

  private doAfterNbrFollowersKo(error: any) {
    // TODO
  }

  checkIfFollowed() {
    this.searchButtonEnabled = false;
    this.userService.checkUsernameIsFollowed(new CheckFollowedInut(
      localStorage.getItem('username'),
      this.output.username,
      localStorage.getItem('token')
      )
    ).subscribe(response => this.doCheckFollowedSuccessful(response), error => this.doCheckFollowedUnsuccessful(error));
  }

  follow() {
    this.followButtonEnabled = false;
    this.userService.followUser( new FollowInput(
      localStorage.getItem('username'),
      localStorage.getItem('token'),
      this.output.username
    )).subscribe(response => this.doFollowSuccessful(response), error => this.doFollowUnsuccessful(error));
  }

  unfollow() {
    this.unfollowButtonEnabled = false;
    this.userService.unfollow( new UnfollowInput(
      localStorage.getItem("username"),
      localStorage.getItem("token"),
      this.output.username
      )
    ).subscribe( response => this.doUnFollowSuccessful(response), error => this.UnFollowUnsuccessful(error));
  }

  private doCheckFollowedSuccessful(response: any) {
    this.searchButtonEnabled = true;
    this.iFollowHim = response.followed;
  }

  private doCheckFollowedUnsuccessful(error: any) {
    this.searchButtonEnabled = true;
    // TODO
  }

  private doFollowSuccessful(response: any) {
    this.followButtonEnabled = true;
    this.iFollowHim = true;
  }

  private doFollowUnsuccessful(error: any) {
    this.followButtonEnabled = true;
    // TODO
  }

  private doUnFollowSuccessful(response: any) {
    this.unfollowButtonEnabled = true;
    if (response.deleted === 1) {
      this.iFollowHim = false;
    }
  }

  private UnFollowUnsuccessful(error: any) {
    this.unfollowButtonEnabled = true;
    // TODO
  }
}
