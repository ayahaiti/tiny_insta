import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../feed/Post";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  @Input() input: Post;
  liked: string = 'grey';
  nbrOfLikes: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.checkIfLiked();

    var thiObj = this;
    setInterval(function () {
      thiObj.getNbrOfLikes();
    }, 2000);
  }

  likePost() {
    if(this.liked === 'grey') {
      this.userService.likePost(this.input.id).subscribe(
        response => this.doOnLikeOk(),
        error => this.doOnLikeKo(error)
      );
    } else {
      this.userService.dislikePost(this.input.id).subscribe(
        response => this.doOnDislikeOk(),
        error => this.doOnDislikeKo(error)
      );
      this.liked = 'grey';
    }
  }
  doOnLikeOk(){
    this.scroll(document.getElementById(this.input.id));
    this.liked = 'red';
  }
  doOnLikeKo(error){
    // TODO show error
  }
  doOnDislikeOk() {
    this.scroll(document.getElementById(this.input.id));
    this.liked = 'grey';
  }
  doOnDislikeKo(error) {
    // TODO show error
  }

  checkIfLiked(){
    this.userService.checkLike(this.input.id).subscribe(
      response => this.doOnCheckLikeOk(response),
      error => this.doOnCheckLikeKo(error)
    );
  }
  doOnCheckLikeOk(response){
    if(response.liked){
      this.liked = 'red';
    }
    else{
      this.liked = 'grey';
    }
  }
  doOnCheckLikeKo(error){
    // TODO show error
  }

  getNbrOfLikes(){
    this.userService.countLikes(this.input.id).subscribe(
      response => this.doOnGetNbrOfLikesOk(response),
      error => this.doOnGetNbrOfLikesKo(error)
    );
  }

  doOnGetNbrOfLikesOk(response){
    this.nbrOfLikes = response.nbOfPostLikes;
  }
  doOnGetNbrOfLikesKo(error){
    // TODO show error
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  onImgClicked(){
    // Get the modal
    var modal = document.getElementById("myModal"+this.input.id);
    modal.style.display = "block";
  }

  onCloseModalClicked(){
    var modal = document.getElementById("myModal"+this.input.id);
    modal.style.display = "none";
  }

}
