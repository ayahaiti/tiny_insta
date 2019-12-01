package io.tiny.insta.tinyinstagram.controllers.io_user;

public class CheckUsernameExistsControllerOutput {

    boolean exists;

    public CheckUsernameExistsControllerOutput(boolean exists) {
        this.exists = exists;
    }

    public CheckUsernameExistsControllerOutput() {

    }

    public boolean isExists() {
        return exists;
    }

    public void setExists(boolean exists) {
        this.exists = exists;
    }

}
