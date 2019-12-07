import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../feed/Post";

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  @Input() input: Post;

  constructor() { }

  ngOnInit() {
  }

}
