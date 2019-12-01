package io.tiny.insta.tinyinstagram.controllers.io_likes;

public class GetPostNbOfLikesControllerInput {

    private String uniqueIdentifier;

    public GetPostNbOfLikesControllerInput(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public GetPostNbOfLikesControllerInput() {
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }
}
