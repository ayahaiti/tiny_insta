package io.tiny.insta.tinyinstagram.controllers.io_followers;

public class GetNbOfFollowersControllerOutput {

    private int nbOfFollowers;

    public GetNbOfFollowersControllerOutput() {
    }

    public GetNbOfFollowersControllerOutput(int nbOfFollowers) {
        this.nbOfFollowers = nbOfFollowers;
    }

    public int getNbOfFollowers() {
        return nbOfFollowers;
    }

    public void setNbOfFollowers(int nbOfFollowers) {
        this.nbOfFollowers = nbOfFollowers;
    }

}
