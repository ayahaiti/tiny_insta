package io.tiny.insta.tinyinstagram.services.io_followers;

public class UnfollowServiceOutput {

    private Long deleted;

    public UnfollowServiceOutput() {
    }

    public UnfollowServiceOutput(Long deleted) {
        this.deleted = deleted;
    }

    public Long getDeleted() {
        return deleted;
    }

    public void setDeleted(Long deleted) {
        this.deleted = deleted;
    }
}
