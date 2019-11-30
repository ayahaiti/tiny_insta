package io.tiny.insta.tinyinstagram.controllers.io_post;

public class CheckPostControllerInput {

    private String uniqueIdentifier;
    private String username;
    private String token;

    public CheckPostControllerInput(String uniqueIdentifier, String username, String token) {
        this.uniqueIdentifier = uniqueIdentifier;
        this.username = username;
        this.token = token;
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
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
