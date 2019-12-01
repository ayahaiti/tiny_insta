package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class CheckIfFollowedControllerOutput {

    private boolean followed;

    public CheckIfFollowedControllerOutput() {
    }

    public CheckIfFollowedControllerOutput(boolean followed) {
        this.followed = followed;
    }

    public boolean isFollowed() {
        return followed;
    }

    public void setFollowed(boolean followed) {
        this.followed = followed;
    }

}
