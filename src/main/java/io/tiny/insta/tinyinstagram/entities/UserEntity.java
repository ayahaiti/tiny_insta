package io.tiny.insta.tinyinstagram.entities;

import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name="users")
public class UserEntity {

    @Id
    private Long id;

    private String username;

    private String password;

    private String email;

    private String joiningDate;

    private String token;


    public UserEntity(String username, String password, String email, String joiningDate, String token) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.joiningDate = joiningDate;
        this.token = token;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "User_Entity{" +
                "id=" + this.id +
                ", username='" + this.username + '\'' +
                ", email=" + this.email +
                '}';
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
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

}
