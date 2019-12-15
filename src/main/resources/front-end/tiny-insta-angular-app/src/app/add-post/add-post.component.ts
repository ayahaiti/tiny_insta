import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../service/user.service";
import {AddPostInput} from "./AddPostInput";
import {NotifierService} from "angular-notifier";

declare var $: any;

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

  constructor(private notifierService: NotifierService, private userService:UserService) { }

  ngOnInit() {
  }

  sendPost() {
    $('#myModal').modal('show');
    this.userService.addPost(new AddPostInput(
      this.uploadedImage,
      localStorage.getItem('username'),
      localStorage.getItem('token'),
      this.quote
      )).subscribe( response => this.doAddPostSuccessful(response), error => this.doAddPostUnsuccessful());
  }

  private doAddPostSuccessful(response) {
    $('#myModal').modal('hide');
    if(response.uniqueIdentifier!=null){
      this.notifierService.hideAll();
      this.notifierService.notify("success","Post saved!");
      this.quote = null;
      this.inputFile.nativeElement.value = "";
      this.uploadedImage = null;
      this.errorMessage = null;
      this.sizeMessage = null;
      this.size = null;
      this.unit = null;
    }
    else{
      this.notifierService.notify("error", "could not add the post! if this error persist please reconnect and retry!");
    }
  }

  private doAddPostUnsuccessful() {
    $('#myModal').modal('hide');
    this.notifierService.notify("error", "unknown error ! we are working on it!")
  }

  onFileChange(event) {
  const reader = new FileReader();

    const size = event.srcElement.files[0].size;
    console.log(size);
    if (size < 1024) {
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
