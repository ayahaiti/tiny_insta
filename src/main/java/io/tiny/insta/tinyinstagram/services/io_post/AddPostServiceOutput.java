package io.tiny.insta.tinyinstagram.services.io_post;

public class AddPostServiceOutput {

    private boolean postAdded;

    private String uniqueIdentifier;

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

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }
}
