package io.tiny.insta.tinyinstagram.services.io_user;

public class CheckTokenServiceOutput {

    Boolean connected;

    public Boolean getConnected() {
        return connected;
    }

    public void setConnected(Boolean connected) {
        this.connected = connected;
    }

    public CheckTokenServiceOutput() {
    }

    public CheckTokenServiceOutput(Boolean connected) {
        this.connected = connected;
    }

}
