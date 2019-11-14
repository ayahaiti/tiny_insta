package io.tiny.insta.tinyinstagram.controllers.io_user;

public class DisconnectUserControllerOutput {

    Boolean disconnected;

    public Boolean getDisconnected() {
        return disconnected;
    }

    public void setDisconnected(Boolean disconnected) {
        this.disconnected = disconnected;
    }

    public DisconnectUserControllerOutput() {
    }

    public DisconnectUserControllerOutput(Boolean disconnected) {
        this.disconnected = disconnected;
    }

}
