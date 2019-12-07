
export class Post {

  id: string;
  username: string;
  image: string;
  quote: string;

  constructor(id: string, username: string, quote: string, image: string) {
    this.id = id;
    this.username = username;
    this.quote = quote;
    this.image = image;
  }

}
