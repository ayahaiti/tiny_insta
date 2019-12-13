import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../service/user.service";
import {AddPostInput} from "./AddPostInput";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) inputFile: ElementRef;

  uploadedImage: string= null;

  size = null;
  unit = null;

  quote: string = null;
  errorMessage: string = null;
  sizeMessage: string = null;

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
    this.quote = null;
    this.inputFile.nativeElement.value = "";
    this.uploadedImage = null;
    this.errorMessage = null;
    this.sizeMessage = null;
    this.size = null;
    this.unit = null;
  }

  private doAddPostUnsuccessful() {
  }

  onFileChange(event) {
  const reader = new FileReader();

    const size = event.srcElement.files[0].size;
    console.log(size);
    if (size < 1000) {
      this.size = size;
      this.unit = "bytes";
    } else if (size < 1000*1000) {
      this.size = size / 1000;
      this.unit = "kb";
    } else if (size < 1000*1000*1000) {
      this.size = size / 1000 / 1000;
      this.unit = "mb";
    } else {
      this.size = size / 1000 /1000 /1000;
      this.unit = "gb";
    }
    console.log(this.size);
    console.log(this.unit);
    if(this.unit=="kb" || this.unit=="bytes"){
      this.sizeMessage = null;
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
    else{
      this.sizeMessage="Image size must be less than 1 MB!";
    }
  }



}
