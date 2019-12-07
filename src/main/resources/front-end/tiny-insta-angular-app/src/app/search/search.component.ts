import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user-service.service";
import {FindUserInput} from "./FindUserInput";
import {CheckUsernameInput} from "./CheckUsernameInput";
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

  buttonActif: boolean = true;

  checkFollow : string = 'none';

  username: string = null;

  displayUser: string = 'none';

  output = {
    username: '',
    countOfFollowers: null
  };

  nonExistant: string = 'none';

  checkUnFollow: string = 'none';

  constructor( private userService: UserService) {}

  ngOnInit(): void {
  }

  findUserAndNbOfFollowers() {
    this.callCheckUsernameExists();
    this.getNbOfFollowers();
  }

  getNbOfFollowers() {
    if(this.output.username !== "Unexistant Username!" && this.output.username != null) {
      this.userService.getUserFollowers(new GetUserFollowersInput(
        localStorage.getItem(this.output.username)
        )
      ).subscribe(response => this.doCountFollowersSuccessful(response), error => this.doCountFollowersUnssuccessful(error));
    }
  }


  callFindUser() {
      this.userService.findUser(new FindUserInput(
        this.username,
        localStorage.getItem("username"),
        localStorage.getItem("token"))
      ).subscribe(response => this.doOnSearchSuccessful(response), error => this.doOnSearchUnsuccessful(error));
  }

  callCheckUsernameExists() {
    this.userService.checkUsername( new CheckUsernameInput(
      this.username
    )).subscribe( response => this.doCheckUsernameExitsSuccessful(response), error => this.doCheckUsernameExistsUnsuccessful(error));
  }

  private doOnSearchSuccessful(response: any) {
      this.output.username = response.userEntity.username;
      this.checkFollowed();
  }

  private doOnSearchUnsuccessful(error: any) {
    this.output.username = "An error occured!";
  }

  private doCheckUsernameExitsSuccessful(response: any) {
    if(response.exists === null || response.exists === false) {
      this.output.username = "Unexistant Username!";
      this.nonExistant = 'block';
    } else {
        this.callFindUser();
        this.displayUser = 'block';
        this.nonExistant = 'none';
    }
  }

  private doCheckUsernameExistsUnsuccessful(error: any) {
    this.output.username = "An error occured!";
  }

  private doCountFollowersSuccessful(response: any) {
    console.log(this.output.countOfFollowers);
    this.output.countOfFollowers = response.nbOfFollowers;
  }

  private doCountFollowersUnssuccessful(error: any) {
    console.log(this.output.countOfFollowers);
    this.output.countOfFollowers = "An error occured!";
  }

  checkFollowed() {
    this.userService.checkUsernameIsFollowed(new CheckFollowedInut(
      localStorage.getItem('username'),
      this.output.username,
      localStorage.getItem('token')
      )
    ).subscribe(response => this.doCheckFollowedSuccessful(response), error => this.doCheckFollowedUnsuccessful(error));
  }

  follow() {
    this.userService.followUser( new FollowInput(
      localStorage.getItem('username'),
      localStorage.getItem('token'),
      this.output.username
    )).subscribe(response => this.doFollowSuccessful(response), error => this.doFollowUnsuccessful(error));
  }

  unfollow() {
    this.userService.unfollow( new UnfollowInput(
      localStorage.getItem("username"),
      localStorage.getItem("token"),
      this.output.username
      )
    ).subscribe( response => this.doUnFollowSuccessful(response), error => this.UnFollowUnsuccessful(error));
  }

  private doFollowSuccessful(response: any) {
      this.checkFollow ='none';
      this.checkUnFollow = 'block';
  }

  private doFollowUnsuccessful(error: any) {
  }

  private doCheckFollowedSuccessful(response: any) {
    if( response.followed === true) {
      this.checkUnFollow = 'block';
    } else {
      this.checkFollow = 'block';
    }
  }

  private doCheckFollowedUnsuccessful(error: any) {
    this.checkFollow = 'block';
  }

  private doUnFollowSuccessful(response: any) {
    if (response.deleted === 1) {
      this.checkFollow = 'block';
      this.checkUnFollow = 'none';
    }
  }

  private UnFollowUnsuccessful(error: any) {

  }
}
