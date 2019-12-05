package io.tiny.insta.tinyinstagram.controllers.io_user;

public class FindUserControllerInput {

    String userToFind;
    String username;

    String token;

    public FindUserControllerInput() {
    }

    public FindUserControllerInput(String userToFind, String username, String token) {
        this.userToFind = userToFind;
        this.username = username;
        this.token = token;
    }

    public String getUserToFind() {
        return userToFind;
    }

    public void setUserToFind(String userToFind) {
        this.userToFind = userToFind;
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
}
