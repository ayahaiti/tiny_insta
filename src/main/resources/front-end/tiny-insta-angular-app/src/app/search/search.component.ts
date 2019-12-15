import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../service/user.service";
import {FindUserInput} from "./FindUserInput";
import {GetUserFollowersInput} from "./GetUserFollowersInput";
import {FollowInput} from "./FollowInput";
import {CheckFollowedInut} from "./CheckFollowedInut";
import {UnfollowInput} from "./UnfollowInput";
import {NotifierService} from "angular-notifier";

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  username: string = null;

  userExists: boolean = false;
  iFollowHim: boolean = false;

  output = {
    username: null,
    errorMessage: null,
    countOfFollowers: null
  };

  constructor(private notifierService: NotifierService, private userService: UserService) {}

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
    $('#myModal').modal('show');
    this.userService.findUser( new FindUserInput(
      localStorage.getItem("username"), localStorage.getItem("token"), this.username
    )).subscribe( response => this.doAfterUserFound(response), error => this.doAfterUserNotFound(error));
  }

  private doAfterUserFound(response: any) {
    if(response.error=="username_token_ko"){
      this.notifierService.notify("error","Please reconnect! your token was KO");
      $('#myModal').modal('hide');
      this.userExists=false;
    }
    else if(response.error=="unknown_user"){
      this.notifierService.notify("warning","This username does not exist !");
      this.userExists=false;
      $('#myModal').modal('hide');
    }
    else{
      this.notifierService.hideAll();
      this.notifierService.notify("success", "user loaded !");
      this.userExists = true;
      this.output.errorMessage = null;
      this.output.username = response.userEntity.username;
      this.checkIfFollowed();
      this.getNbOfFollowers();
    }
  }

  private doAfterUserNotFound(error: any) {
    $('#myModal').modal('hide');
    this.userExists = false;
    this.output.errorMessage = "User not found!";
    this.notifierService.notify("warning","We could not get the user you are looking for !");
  }

  private doAfterNbrFollowersOk(response: any) {
    this.output.countOfFollowers = response.nbOfFollowers;
  }

  private doAfterNbrFollowersKo(error: any) {
    this.notifierService.notify("error","could not get the number of followers !");
  }

  checkIfFollowed() {
    this.userService.checkUsernameIsFollowed(new CheckFollowedInut(
      localStorage.getItem('username'),
      this.output.username,
      localStorage.getItem('token')
      )
    ).subscribe(response => this.doCheckFollowedSuccessful(response), error => this.doCheckFollowedUnsuccessful(error));
  }

  follow() {
    $('#myModal').modal('show');
    this.userService.followUser( new FollowInput(
      localStorage.getItem('username'),
      localStorage.getItem('token'),
      this.output.username
    )).subscribe(response => this.doFollowSuccessful(response), error => this.doFollowUnsuccessful(error));
  }

  unfollow() {
    $('#myModal').modal('show');
    this.userService.unfollow( new UnfollowInput(
      localStorage.getItem("username"),
      localStorage.getItem("token"),
      this.output.username
      )
    ).subscribe( response => this.doUnFollowSuccessful(response), error => this.UnFollowUnsuccessful(error));
  }

  private doCheckFollowedSuccessful(response: any) {
    $('#myModal').modal('hide');
    if(response.error=="username_token_ko"){
      this.notifierService.notify("error","Please reconnect! your token was KO");
    }
    else{
      this.iFollowHim = response.followed;
    }
  }

  private doCheckFollowedUnsuccessful(error: any) {
    $('#myModal').modal('hide');
    this.notifierService.notify("error","If you want to follow, please try again!");
  }

  private doFollowSuccessful(response: any) {
    $('#myModal').modal('hide');
    if(response.error=="username_token_ko"){
      this.notifierService.notify("error","Please reconnect! your token was KO");
    }
    else if (response.error=="more_than_one_follow"){
      this.notifierService.notify("error","you can't follow this person, we are working on fixing this issue!");
    }
    else{
      this.iFollowHim = true;
      if(this.output.countOfFollowers!=null){
        this.output.countOfFollowers++;
      }
    }
  }

  private doFollowUnsuccessful(error: any) {
    $('#myModal').modal('hide');
    this.notifierService.notify("error","If you want to follow, please try again!");
  }

  private doUnFollowSuccessful(response: any) {
    $('#myModal').modal('hide');
    if(response.error=="username_token_ko"){
      this.notifierService.notify("error","Please reconnect! your token was KO");
    }
    else if (response.error=="more_than_one_follow"){
      this.notifierService.notify("error","you can't unfollow this person, we are working on fixing this issue!");
    }
    else{
      if (response.deleted === 1) {
        this.iFollowHim = false;
        if(this.output.countOfFollowers!=null){
          this.output.countOfFollowers--;
        }
      }
    }
  }

  private UnFollowUnsuccessful(error: any) {
    $('#myModal').modal('hide');
    this.notifierService.notify("error","If you want to unfollow, please try again!");
  }
}
