package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class CheckLikedControllerOutput {

    private boolean liked;

    public CheckLikedControllerOutput() {
    }

    public CheckLikedControllerOutput(boolean liked) {
        this.liked = liked;
    }

    public boolean isLiked() {
        return liked;
    }

    public void setLiked(boolean liked) {
        this.liked = liked;
    }
}
