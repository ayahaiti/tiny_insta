package io.tiny.insta.tinyinstagram.services.io_followers;

public class CheckIfFollowedServiceOutput {

    private boolean followed;

    public CheckIfFollowedServiceOutput() {
    }

    public CheckIfFollowedServiceOutput(boolean followed) {
        this.followed = followed;
    }

    public boolean isFollowed() {
        return followed;
    }

    public void setFollowed(boolean followed) {
        this.followed = followed;
    }
}
