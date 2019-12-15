package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class FollowUserControllerOutput {

    private String error;

    public FollowUserControllerOutput(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
