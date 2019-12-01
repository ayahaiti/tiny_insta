package io.tiny.insta.tinyinstagram.services.io_likes;

public class CheckLikedServiceOutput {

    private boolean liked;

    public CheckLikedServiceOutput() {
    }

    public CheckLikedServiceOutput(boolean liked) {
        this.liked = liked;
    }

    public boolean isLiked() {
        return liked;
    }

    public void setLiked(boolean liked) {
        this.liked = liked;
    }
}
