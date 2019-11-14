package io.tiny.insta.tinyinstagram.services.io_user;

public class FindUserServiceInput {

    String userToSearch;

    String username;

    String token;

    public FindUserServiceInput() {
    }

    public FindUserServiceInput(String userToSearch, String username, String token) {
        this.userToSearch = userToSearch;
        this.username = username;
        this.token = token;
    }

    public String getUserToSearch() {
        return userToSearch;
    }

    public void setUserToSearch(String userToSearch) {
        this.userToSearch = userToSearch;
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
