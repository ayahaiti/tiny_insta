export class DisconnectInput {

    username: string;
    token: string;


  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }
}