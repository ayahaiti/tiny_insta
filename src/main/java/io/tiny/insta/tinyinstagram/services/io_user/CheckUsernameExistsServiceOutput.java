package io.tiny.insta.tinyinstagram.services.io_user;

public class CheckUsernameExistsServiceOutput {

    boolean exists;

    public CheckUsernameExistsServiceOutput(boolean exists) {
        this.exists = exists;
    }

    public CheckUsernameExistsServiceOutput() {

    }

    public boolean isExists() {
        return exists;
    }

    public void setExists(boolean exists) {
        this.exists = exists;
    }
}
