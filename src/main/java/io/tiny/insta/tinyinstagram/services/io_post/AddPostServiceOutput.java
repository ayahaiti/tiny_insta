package io.tiny.insta.tinyinstagram.services.io_post;

public class AddPostServiceOutput {

    boolean postAdded;

    public AddPostServiceOutput() {
    }

    public AddPostServiceOutput(boolean postAdded) {
        this.postAdded = postAdded;
    }

    public boolean isPostAdded() {
        return postAdded;
    }

    public void setPostAdded(boolean postAdded) {
        this.postAdded = postAdded;
    }
}
