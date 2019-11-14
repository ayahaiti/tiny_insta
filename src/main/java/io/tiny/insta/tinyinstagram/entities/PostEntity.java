package io.tiny.insta.tinyinstagram.entities;


import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name="POST_ENTITY")
public class PostEntity {

    @Id
    private Long id;

    private String image;

    private String quote;

    private String username;

    public PostEntity() {
    }

    public PostEntity(Long id, String image, String quote, String username) {
        this.id = id;
        this.image = image;
        this.quote = quote;
    }

    public PostEntity(String image, String quote, String username) {
        this.image = image;
        this.quote = quote;
        this.username=username;
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
}
