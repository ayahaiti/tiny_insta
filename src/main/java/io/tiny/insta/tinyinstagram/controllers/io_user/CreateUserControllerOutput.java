package io.tiny.insta.tinyinstagram.controllers.io_user;

public class CreateUserControllerOutput {

    private String error;

    public CreateUserControllerOutput() {
    }

    public CreateUserControllerOutput(String error){
        this.error = error;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
