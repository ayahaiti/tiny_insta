package io.tiny.insta.tinyinstagram.entities;

import javax.jws.soap.SOAPBinding;
import javax.persistence.*;

@Entity
@Table(name="POST_ENTITY")
public class PostEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String image;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="id_user", nullable=false)
    private UserEntity userEntity;

    private String quote;

    public PostEntity() {
    }

    public PostEntity(Long id, String image, String quote, String username) {
        this.id = id;
        this.image = image;
        this.quote = quote;
    }

    public PostEntity(String image, String quote, UserEntity userEntity) {
        this.image = image;
        this.quote = quote;
        this.userEntity=userEntity;
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

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }
}
