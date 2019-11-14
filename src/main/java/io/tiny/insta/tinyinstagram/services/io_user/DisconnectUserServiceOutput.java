package io.tiny.insta.tinyinstagram.services.io_user;

public class DisconnectUserServiceOutput {

    Boolean disconnected;

    public Boolean getDisconnected() {
        return disconnected;
    }

    public void setDisconnected(Boolean disconnected) {
        this.disconnected = disconnected;
    }

    public DisconnectUserServiceOutput() {
    }

    public DisconnectUserServiceOutput(Boolean disconnected) {
        this.disconnected = disconnected;
    }
}
