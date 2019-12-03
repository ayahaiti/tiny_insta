export class FindUserInput {

  username: string;
  userToFind: string;
  token: string;

  constructor(username: string, userToFind: string, token: string) {
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
