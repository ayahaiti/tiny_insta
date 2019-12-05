export class FindUserInput {

  userToFind: string;
  username: string;
  token: string;

  constructor(userToFind: string, username: string, token: string) {
      this.username = username;
      this.userToFind = userToFind;
      this.token = token;
  }

  isValid(){
    if( this.username != null && this.username.length>0){
      return true;
    }
    else{
      return false;
    }
  }
}
