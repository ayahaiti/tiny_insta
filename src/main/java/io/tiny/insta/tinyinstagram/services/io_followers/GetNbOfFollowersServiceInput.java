package io.tiny.insta.tinyinstagram.services.io_followers;

public class GetNbOfFollowersServiceInput {

    private String username;

    public GetNbOfFollowersServiceInput() {
    }

    public GetNbOfFollowersServiceInput(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
