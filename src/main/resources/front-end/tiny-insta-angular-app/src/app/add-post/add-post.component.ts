import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {AddPostInput} from "./AddPostInput";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  uploadedImage: string = null;

  quote: string = null;


  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  addpost() {
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
}
