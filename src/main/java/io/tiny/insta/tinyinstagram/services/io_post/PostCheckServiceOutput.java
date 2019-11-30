package io.tiny.insta.tinyinstagram.services.io_post;

public class PostCheckServiceOutput {

    private Boolean exists;

    public PostCheckServiceOutput(Boolean exists){
        this.exists = exists;
    }

    public Boolean getExists() {
        return exists;
    }

    public void setExists(Boolean exists) {
        this.exists = exists;
    }
}
