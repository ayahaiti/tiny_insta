export class AddPostInput {

  image: string;

  username: string;

  token: string;

  quote: string;


  constructor(image: string, username: string, token: string, quote: string) {
    this.image = image;
    this.username = username;
    this.token = token;
    this.quote = quote;
  }
}
