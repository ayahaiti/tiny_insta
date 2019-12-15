package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class DislikePostControllerOutput {

    private String error;

    public DislikePostControllerOutput(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

}
