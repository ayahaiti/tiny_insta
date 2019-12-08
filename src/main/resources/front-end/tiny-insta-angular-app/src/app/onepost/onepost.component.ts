import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../feed/Post";

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  @Input() input: Post;
  liked: string = 'grey';

  constructor() { }

  ngOnInit() {
  }

  likePost() {
    if(this.liked === 'grey') {
      this.liked = 'red';
    } else {
      this.liked = 'grey';
    }
  }
}
