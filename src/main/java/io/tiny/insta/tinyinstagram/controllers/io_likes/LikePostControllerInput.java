package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class LikePostControllerInput {

    private String username;

    private String token;

    private String uniqueIdentifier;

    public LikePostControllerInput(String username, String uniqueIdentifier) {
        this.username = username;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LikePostControllerInput() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }

}
