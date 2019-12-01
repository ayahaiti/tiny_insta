package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class GetPostNbOfLikesControllerOutput {

    private int nbOfPostLikes;

    public GetPostNbOfLikesControllerOutput(int nbOfPostLikes) {
        this.nbOfPostLikes = nbOfPostLikes;
    }

    public int getNbOfPostLikes() {
        return nbOfPostLikes;
    }

    public void setNbOfPostLikes(int nbOfPostLikes) {
        this.nbOfPostLikes = nbOfPostLikes;
    }

}
