export class RegisterFormInput {
  username : string;
  email : string;
  password : string;

  isValid(){
    if( this.username != null && this.username.length>0
      && this.email != null && this.email.length>0
      && this.password != null && this.email.length>0 ){
      return true;
    }
    else{
      return false;
    }
  }
}
