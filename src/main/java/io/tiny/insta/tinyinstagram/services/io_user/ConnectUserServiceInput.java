package io.tiny.insta.tinyinstagram.services.io_user;

public class ConnectUserServiceInput {

    private String username;
    private String password;

    public ConnectUserServiceInput() {
    }

    public ConnectUserServiceInput(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
