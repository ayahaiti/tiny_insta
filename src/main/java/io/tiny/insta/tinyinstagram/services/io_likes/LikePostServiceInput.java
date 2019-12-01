package io.tiny.insta.tinyinstagram.services.io_likes;

public class LikePostServiceInput {

    private String username;

    private String token;

    private String uniqueIdentifier;

    public LikePostServiceInput(String username, String uniqueIdentifier) {
        this.username = username;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public LikePostServiceInput() {
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
