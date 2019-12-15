package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class CheckIfFollowedControllerOutput {

    private boolean followed;
    private String error;

    public CheckIfFollowedControllerOutput() {
    }

    public CheckIfFollowedControllerOutput(boolean followed, String error) {
        this.followed = followed;
        this.error = error;
    }

    public boolean isFollowed() {
        return followed;
    }

    public void setFollowed(boolean followed) {
        this.followed = followed;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
