package io.tiny.insta.tinyinstagram.services.io_likes;

public class GetPostNbOfLikesServiceInput {

    private String uniqueIdentifier;

    public GetPostNbOfLikesServiceInput(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public GetPostNbOfLikesServiceInput() {
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }
}
