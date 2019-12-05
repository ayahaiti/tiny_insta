export class FollowInput {

  private username: string = null;

  private token: string = null;

  private usernameToFollow: string = null;


  constructor(username: string, token: string, usernameToFollow: string) {
    this.username = username;
    this.token = token;
    this.usernameToFollow = usernameToFollow;
  }
}
