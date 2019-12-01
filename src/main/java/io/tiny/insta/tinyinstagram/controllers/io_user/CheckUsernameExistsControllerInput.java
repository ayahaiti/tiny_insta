package io.tiny.insta.tinyinstagram.controllers.io_user;

public class CheckUsernameExistsControllerInput {

    private String username;

    public CheckUsernameExistsControllerInput() {
    }

    public CheckUsernameExistsControllerInput(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
