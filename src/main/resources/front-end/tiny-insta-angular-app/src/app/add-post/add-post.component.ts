import {Component, OnInit} from '@angular/core';
import {UserService} from "../service/user.service";
import {AddPostInput} from "./AddPostInput";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  uploadedImage: string= null;

  quote: string = null;
  errorMessage: string = null;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  sendPost() {
    this.userService.addPost(new AddPostInput(
      this.uploadedImage,
      localStorage.getItem('username'),
      localStorage.getItem('token'),
      this.quote
      )).subscribe( response => this.doAddPostSuccessful(), error => this.doAddPostUnsuccessful());
  }

  private doAddPostSuccessful() {
  }

  private doAddPostUnsuccessful() {
  }

  onFileChange(event) {
  const reader = new FileReader();

  if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      let result = null;
      reader.onload = () => {
        result = reader.result;
        this.uploadedImage = result.toString();
        console.log(result.toString());
        if(this.uploadedImage.startsWith("data:image/jpeg;")){
          this.errorMessage = null;
        }
        else{
          this.errorMessage = "File type not accepted, please upload JPEG only !";
        }
      };
    }
  }


}
