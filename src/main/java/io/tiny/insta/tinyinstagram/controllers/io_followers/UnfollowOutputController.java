package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class UnfollowOutputController {

    private Long deleted;

    public UnfollowOutputController() {
    }

    public UnfollowOutputController(Long deleted) {
        this.deleted = deleted;
    }

    public Long getDeleted() {
        return deleted;
    }

    public void setDeleted(Long deleted) {
        this.deleted = deleted;
    }

}
