package io.tiny.insta.tinyinstagram.entities;


import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name="followers")
public class FollowersEntity {

    @Id
    private Long id;

    private String followedUsername;

    private String followerUsername;

    public FollowersEntity(String followedUsername, String followerUsername) {
        this.followedUsername = followedUsername;
        this.followerUsername = followerUsername;
    }

    public FollowersEntity(Long id, String followed_username, String follower_username) {
        this.id = id;
        this.followedUsername = followed_username;
        this.followerUsername = follower_username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFollowedUsername() {
        return followedUsername;
    }

    public void setFollowedUsername(String followedUsername) {
        this.followedUsername = followedUsername;
    }

    public String getFollowerUsername() {
        return followerUsername;
    }

    public void setFollowerUsername(String followerUsername) {
        this.followerUsername = followerUsername;
    }
}
