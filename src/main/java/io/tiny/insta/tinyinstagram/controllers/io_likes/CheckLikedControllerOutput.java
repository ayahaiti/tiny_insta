package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class CheckLikedControllerOutput {

    private boolean liked;
    private String error;

    public CheckLikedControllerOutput() {
    }

    public CheckLikedControllerOutput(boolean liked, String error) {
        this.liked = liked;
        this.error = error;
    }

    public boolean isLiked() {
        return liked;
    }

    public void setLiked(boolean liked) {
        this.liked = liked;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
