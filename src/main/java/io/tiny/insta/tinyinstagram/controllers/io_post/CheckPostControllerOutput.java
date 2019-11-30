package io.tiny.insta.tinyinstagram.controllers.io_post;

public class CheckPostControllerOutput {
    private Boolean exists;

    public CheckPostControllerOutput(Boolean exists){
        this.exists = exists;
    }

    public Boolean getExists() {
        return exists;
    }

    public void setExists(Boolean exists) {
        this.exists = exists;
    }
}
