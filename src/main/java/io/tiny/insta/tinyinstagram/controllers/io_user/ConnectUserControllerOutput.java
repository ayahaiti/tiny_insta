package io.tiny.insta.tinyinstagram.controllers.io_user;

public class ConnectUserControllerOutput {

    String username;
    String token;

    public ConnectUserControllerOutput() {
    }

    public ConnectUserControllerOutput(String username, String token) {
        this.username = username;
        this.token = token;
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
