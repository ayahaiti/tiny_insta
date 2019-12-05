export class GetUserFollowersInput {

  private username: string = null;

  constructor (exists: string) {
    this.username = exists;
  }

}
