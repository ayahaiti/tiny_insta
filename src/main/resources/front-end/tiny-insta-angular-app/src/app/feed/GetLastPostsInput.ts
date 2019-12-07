
export class GetLastPostsInput {

  username: string;
  token: string;
  page: number = 0;

  constructor(username: string, token: string) {
    this.username = username;
    this.token = token;
  }

}
