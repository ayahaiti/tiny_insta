export class UnfollowInput {

  private  username: String;

  private  token: String;

  private  usernameToFollow: String;


  constructor(username: String, token: String, usernameToFollow: String) {
    this.username = username;
    this.token = token;
    this.usernameToFollow = usernameToFollow;
  }
}
