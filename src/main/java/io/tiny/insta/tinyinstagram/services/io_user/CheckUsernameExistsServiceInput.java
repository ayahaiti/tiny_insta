package io.tiny.insta.tinyinstagram.services.io_user;

public class CheckUsernameExistsServiceInput {


    private String username;

    public CheckUsernameExistsServiceInput() {
    }

    public CheckUsernameExistsServiceInput(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
