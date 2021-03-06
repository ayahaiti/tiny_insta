package io.tiny.insta.tinyinstagram.services.io_followers;

public class CheckIfFollowedServiceInput {

    private String follower;

    private String followed;

    private String token;

    public CheckIfFollowedServiceInput() {
    }

    public CheckIfFollowedServiceInput(String follower, String followed, String token) {
        this.follower = follower;
        this.followed = followed;
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getFollower() {
        return follower;
    }

    public void setFollower(String follower) {
        this.follower = follower;
    }

    public String getFollowed() {
        return followed;
    }

    public void setFollowed(String followed) {
        this.followed = followed;
    }
}
