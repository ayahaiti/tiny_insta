import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../feed/Post";
import {UserService} from "../service/user.service";
import {NotifierService} from "angular-notifier";

declare var $: any;

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit, OnDestroy {

  @Input() input: Post;
  postAction: string = "like";
  liked: boolean = false;
  nbrOfLikes: number = null;
  interval: any = null;

  constructor(private notifierService: NotifierService, private userService: UserService) { }

  ngOnInit() {
    this.checkIfLiked();

    var thiObj = this;
    this.interval = setInterval(function () {
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
        response => this.doOnDislikeOk(response),
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
    this.notifierService.notify("error", "you can't like this post ! we are working to fix this issue !");
  }
  doOnDislikeOk(response) {
    $('#myModal').modal('hide');
    if(response.error=="username_token_ko"){
      this.notifierService.notify("error", "your token is KO, please disconnect and reconnect !");
    }
    else if(response.error=="more_than_one_like"){
      this.notifierService.notify("error", "you can't have more than one like! we are working to fix this issue");
    }
    else{
      this.notifierService.hideAll();
      if(this.nbrOfLikes!=null){
        this.nbrOfLikes--;
      }
      this.postAction = "like";
      this.liked = false;
    }
  }
  doOnDislikeKo(error) {
    $('#myModal').modal('hide');
    this.notifierService.notify("error", "you can't dislike this post ! we are working to fix this issue !");
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
    this.notifierService.notify("error", "unknown error, we are working to fix it!");
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
    this.notifierService.notify("error", "unknown error, we are working to fix it!");
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

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
