package io.tiny.insta.tinyinstagram.controllers.io_user;

public class ConnectUserControllerOutput {

    private String username;
    private String token;
    private String error;

    public ConnectUserControllerOutput() {
    }

    public ConnectUserControllerOutput(String username, String token, String error) {
        this.username = username;
        this.token = token;
        this.error = error;
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

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
