package io.tiny.insta.tinyinstagram.services.io_followers;

public class UnfollowServiceInput {

    private String username;

    private String token;

    private String usernameToFollow;

    public UnfollowServiceInput() {
    }

    public UnfollowServiceInput(String username, String token, String usernameToFollow) {
        this.username = username;
        this.token = token;
        this.usernameToFollow = usernameToFollow;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsernameToFollow() {
        return usernameToFollow;
    }

    public void setUsernameToFollow(String usernameToFollow) {
        this.usernameToFollow = usernameToFollow;
    }
}
