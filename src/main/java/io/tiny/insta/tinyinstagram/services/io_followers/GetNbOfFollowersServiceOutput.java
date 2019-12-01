package io.tiny.insta.tinyinstagram.services.io_followers;

public class GetNbOfFollowersServiceOutput {

    private int nbOfFollowers;

    public GetNbOfFollowersServiceOutput() {
    }

    public GetNbOfFollowersServiceOutput(int nbOfFollowers) {
        this.nbOfFollowers = nbOfFollowers;
    }

    public int getNbOfFollowers() {
        return nbOfFollowers;
    }

    public void setNbOfFollowers(int nbOfFollowers) {
        this.nbOfFollowers = nbOfFollowers;
    }
}
