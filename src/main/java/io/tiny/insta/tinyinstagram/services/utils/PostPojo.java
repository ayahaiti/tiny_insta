package io.tiny.insta.tinyinstagram.services.utils;

public class PostPojo {

    String id;
    String username;
    String quote;
    String image;

    public PostPojo(String id, String username, String quote, String image) {
        this.id = id;
        this.username = username;
        this.quote = quote;
        this.image = image;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
