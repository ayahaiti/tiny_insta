package io.tiny.insta.tinyinstagram.services.io_post;

public class PostCheckServiceInput {

    private String uniqueIdentifier;
    private String username;
    private String token;

    public PostCheckServiceInput(String uniqueIdentifier, String username, String token) {
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
