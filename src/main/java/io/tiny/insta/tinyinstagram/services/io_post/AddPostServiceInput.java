package io.tiny.insta.tinyinstagram.services.io_post;

public class AddPostServiceInput {


    private String image;

    private String username;

    private String token;

    private String quote;

    public AddPostServiceInput(String image, String username, String token, String quote) {
        this.image = image;
        this.username = username;
        this.token = token;
        this.quote = quote;
    }

    public AddPostServiceInput() {
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
