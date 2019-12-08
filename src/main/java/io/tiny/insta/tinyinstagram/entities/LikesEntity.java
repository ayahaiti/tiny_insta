package io.tiny.insta.tinyinstagram.entities;
import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name="likes")
public class LikesEntity {

    @Id
    private Long id;

    private String username;

    private String uniqueIdentifier;

    public LikesEntity(){

    }

    public LikesEntity(Long id, String username, String uniqueIdentifier) {
        this.id = id;
        this.username = username;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public LikesEntity(String username, String uniqueIdentifier) {
        this.username = username;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUniqueIdentifier() {
        return uniqueIdentifier;
    }

    public void setUniqueIdentifier(String uniqueIdentifier) {
        this.uniqueIdentifier = uniqueIdentifier;
    }
}
