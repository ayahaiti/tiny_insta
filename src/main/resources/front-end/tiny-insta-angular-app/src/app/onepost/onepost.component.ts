import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../feed/Post";
import {UserService} from "../service/user.service";

declare var $: any;

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  @Input() input: Post;
  postAction: string = "like";
  liked: boolean = false;
  nbrOfLikes: number = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.checkIfLiked();

    var thiObj = this;
    setInterval(function () {
      thiObj.getNbrOfLikes();
    }, 2000);
  }

  likePost() {
    $('#myModal').modal('show');
    if(this.postAction === "like") {
      this.userService.likePost(this.input.id).subscribe(
        response => this.doOnLikeOk(response),
        error => this.doOnLikeKo(error)
      );
    } else {
      this.userService.dislikePost(this.input.id).subscribe(
        response => this.doOnDislikeOk(),
        error => this.doOnDislikeKo(error)
      );
      this.postAction = "like";
      this.liked = false;
    }
  }
  doOnLikeOk(response){
    $('#myModal').modal('hide');
    this.postAction = "dislike";
    if(this.nbrOfLikes!=null){
      this.nbrOfLikes++;
    }
    this.liked = true;
  }
  doOnLikeKo(error){
    $('#myModal').modal('hide');
    // TODO show error
  }
  doOnDislikeOk() {
    $('#myModal').modal('hide');
    if(this.nbrOfLikes!=null){
      this.nbrOfLikes--;
    }
    this.postAction = "like";
    this.liked = false;
  }
  doOnDislikeKo(error) {
    $('#myModal').modal('hide');
    // TODO show error
  }

  checkIfLiked(){
    $('#myModal').modal('show');
    this.userService.checkLike(this.input.id).subscribe(
      response => this.doOnCheckLikeOk(response),
      error => this.doOnCheckLikeKo(error)
    );
  }
  doOnCheckLikeOk(response){
    $('#myModal').modal('hide');
    if(response.liked){
      this.postAction = "dislike";
      this.liked = true;
    }
    else{
      this.postAction = "like";
      this.liked = false;
    }
  }
  doOnCheckLikeKo(error){
    $('#myModal').modal('hide');
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
