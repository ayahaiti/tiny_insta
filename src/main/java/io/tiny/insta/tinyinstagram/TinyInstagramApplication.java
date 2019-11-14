package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // TODO add two polling ws : to check if user-create ended & post-create ended

    // TODO add exceptions : usernameAlreadyExists for user-create
    // TODO add exceptions : usernameAndPasswordKO for user-connect + username&password ko
    // TODO add exceptions : usernameAndTokenKO for the rest of ws

    // TODO add incrementing value : time of insertion to add/post ws => in get/posts change parameter in order by

    // TODO angular : signIn & signUp & dashboard : disconnect + show last posts

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);

    }

}
