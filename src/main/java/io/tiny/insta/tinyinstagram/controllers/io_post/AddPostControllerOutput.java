package io.tiny.insta.tinyinstagram.controllers.io_post;

public class AddPostControllerOutput {

    boolean added;

    public boolean isAdded() {
        return added;
    }

    public void setAdded(boolean added) {
        this.added = added;
    }

    public AddPostControllerOutput(boolean added) {
        this.added = added;
    }
}
