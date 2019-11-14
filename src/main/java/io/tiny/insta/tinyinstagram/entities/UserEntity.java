package io.tiny.insta.tinyinstagram.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="USER_ENTITY")
public class UserEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    private String email;

    private String joiningDate;

    private String token;

    @OneToMany(mappedBy="userEntity", fetch = FetchType.LAZY)
    private Set<PostEntity> posts;

    public UserEntity() {
    }

    public UserEntity(String username, String password, String email, String joiningDate, String token) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.joiningDate = joiningDate;
        this.token = token;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(String joiningDate) {
        this.joiningDate = joiningDate;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}
