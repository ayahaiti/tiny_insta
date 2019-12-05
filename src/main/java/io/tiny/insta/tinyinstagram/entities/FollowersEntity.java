package io.tiny.insta.tinyinstagram.entities;


import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name="followers")
public class FollowersEntity {

    @Id
    private Long id;

    private String followed;

    private String follower;

    public FollowersEntity() {
    }

    public FollowersEntity(String followed, String follower) {
        this.followed = followed;
        this.follower = follower;
    }

    @Override
    public String toString() {
        return "User_Entity{" +
                "id=" + this.id +
                ", followed='" + this.followed + '\'' +
                ", follower=" + this.follower +
                '}';
    }
    public FollowersEntity(Long id, String followed_username, String follower_username) {
        this.id = id;
        this.followed = followed_username;
        this.follower = follower_username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFollowed() {
        return followed;
    }

    public void setFollowed(String followed) {
        this.followed = followed;
    }

    public String getFollower() {
        return follower;
    }

    public void setFollower(String follower) {
        this.follower = follower;
    }
}
