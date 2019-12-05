export class CheckFollowedInut {
  private  follower: string;

  private  followed: string;

  private  token: string;


  constructor(follower: string, followed: string, token: string) {
    this.follower = follower;
    this.followed = followed;
    this.token = token;
  }
}
