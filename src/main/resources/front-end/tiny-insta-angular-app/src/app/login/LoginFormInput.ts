export class LoginFormInput {
  username : string;
  password : string;

  isValid(){
    if( this.username != null && this.username.length>0
      && this.password != null && this.password.length>0 ){
      return true;
    }
    else{
      return false;
    }
  }
}
