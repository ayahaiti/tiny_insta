package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // TODO show notifications https://www.npmjs.com/package/angular-notifier

    // TODO add exceptions : usernameAndTokenKO for the rest of ws
    // TODO add exceptions : usernameAlreadyExists for user-create
    // TODO add exceptions : usernameAndPasswordKO for user-connect + username&password ko

    // TODO reload feed every 5seconds => load only 6 last images

    // TODO design search component + result using bootstrap
    // TODO remove all posts and add pretty ones

    // TODO generate new token every new connection

    // TODO add auto-scaling config gcp https://www.baeldung.com/spring-boot-google-app-engine

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);
    }

}
