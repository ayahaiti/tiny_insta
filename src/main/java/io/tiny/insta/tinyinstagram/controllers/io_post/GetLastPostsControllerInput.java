package io.tiny.insta.tinyinstagram.controllers.io_post;

public class GetLastPostsControllerInput {

    private String username;

    private String token;

    private int page;

    public GetLastPostsControllerInput() {
    }
    public GetLastPostsControllerInput(String username, String token, int page) {
        this.username = username;
        this.token = token;
        this.page = page;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
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
