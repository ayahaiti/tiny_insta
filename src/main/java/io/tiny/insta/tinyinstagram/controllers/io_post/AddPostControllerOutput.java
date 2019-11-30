package io.tiny.insta.tinyinstagram.controllers.io_post;

public class AddPostControllerOutput {

    private boolean added;
    private String uniqueIdentifier;

    public boolean isAdded() {
        return added;
    }

    public void setAdded(boolean added) {
        this.added = added;
    }

    public AddPostControllerOutput(boolean added, String uniqueIdentifier) {
        this.added = added;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }
}
