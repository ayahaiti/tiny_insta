package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class LikePostControllerOutput {

    private String error;

    public LikePostControllerOutput(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
