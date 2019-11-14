package io.tiny.insta.tinyinstagram.entities;

import org.springframework.cloud.gcp.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name="users")
public class UserEntity {

    @Id
    Long id;

    String username;

    String password;

    String email;

    String joiningDate;

    String token;

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

    @Override
    public String toString() {
        return "User_Entity{" +
                "id=" + this.id +
                ", username='" + this.username + '\'' +
                ", email=" + this.email +
                '}';
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return this.username;
    }

    public String getToken() {
        return token;
    }
}
