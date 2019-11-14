package io.tiny.insta.tinyinstagram.controllers.io_user;

public class CheckTokenControllerOutput {

    Boolean connected;

    public Boolean getConnected() {
        return connected;
    }

    public void setConnected(Boolean connected) {
        this.connected = connected;
    }

    public CheckTokenControllerOutput() {
    }

    public CheckTokenControllerOutput(Boolean connected) {
        this.connected = connected;
    }
}
