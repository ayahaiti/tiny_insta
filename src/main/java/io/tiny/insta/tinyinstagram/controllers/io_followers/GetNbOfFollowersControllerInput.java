package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class GetNbOfFollowersControllerInput {

    private String username;

    public GetNbOfFollowersControllerInput() {
    }

    public GetNbOfFollowersControllerInput(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
