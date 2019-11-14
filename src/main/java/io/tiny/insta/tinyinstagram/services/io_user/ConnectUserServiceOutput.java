package io.tiny.insta.tinyinstagram.services.io_user;

public class ConnectUserServiceOutput {

    String username;
    String token;

    public ConnectUserServiceOutput() {
    }

    public ConnectUserServiceOutput(String id, String token) {
        this.username = id;
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
