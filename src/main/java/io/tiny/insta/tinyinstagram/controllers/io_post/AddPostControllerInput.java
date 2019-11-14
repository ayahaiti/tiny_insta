package io.tiny.insta.tinyinstagram.controllers.io_post;

public class AddPostControllerInput {

    private String image;

    private String username;

    private String token;

    private String quote;

    public AddPostControllerInput(String image, String username, String quote) {
        this.image = image;
        this.username = username;
        this.quote = quote;
    }

    public AddPostControllerInput(String image, String username, String token, String quote) {
        this.image = image;
        this.username = username;
        this.token = token;
        this.quote = quote;
    }

    public AddPostControllerInput() {
    }
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }
}
