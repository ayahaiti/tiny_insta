package io.tiny.insta.tinyinstagram.entities;


import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.cloud.gcp.data.datastore.core.mapping.Unindexed;
import org.springframework.data.annotation.Id;

@Entity(name="posts")
public class PostEntity {

    @Id
    private Long id;

    private String timestamp;

    private String uniqueIdentifier;

    @Unindexed
    private String image;

    private String quote;

    private String username;

    public PostEntity() {
    }

    public PostEntity(Long id, String image, String quote, String username, String timestamp, String uniqueIdentifier) {
        this.id = id;
        this.image = image;
        this.quote = quote;
        this.timestamp = timestamp;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public PostEntity(String image, String quote, String username, String timestamp, String uniqueIdentifier) {
        this.image = image;
        this.quote = quote;
        this.username=username;
        this.timestamp = timestamp;
        this.uniqueIdentifier = uniqueIdentifier;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
