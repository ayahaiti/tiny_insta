package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class UnfollowOutputController {

    private Long deleted;
    private String error;

    public UnfollowOutputController() {
    }

    public UnfollowOutputController(Long deleted, String error) {
        this.deleted = deleted;
        this.error = error;
    }

    public Long getDeleted() {
        return deleted;
    }

    public void setDeleted(Long deleted) {
        this.deleted = deleted;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
