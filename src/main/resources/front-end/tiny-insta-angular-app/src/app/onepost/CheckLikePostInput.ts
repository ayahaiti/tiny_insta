
export class CheckLikePostInput {

  username: string;
  token: string;
  uniqueIdentifier: string;

  constructor(username: string, token: string, uniqueIdentifier: string) {
    this.username = username;
    this.token = token;
    this.uniqueIdentifier = uniqueIdentifier;
  }

}
