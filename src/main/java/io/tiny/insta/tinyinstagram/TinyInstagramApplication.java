package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // set button instead of love icon => do like follow button

    // reload feed every 5seconds => load only 6 last images

    // TODO lock all button after click + show error messages

    // show error messages like feed : calendar904

    // TODO add exceptions : usernameAlreadyExists for user-create
    // TODO add exceptions : usernameAndPasswordKO for user-connect + username&password ko
    // TODO add exceptions : usernameAndTokenKO for the rest of ws

    // TODO add auto-scaling config gcp https://www.baeldung.com/spring-boot-google-app-engine

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);
    }

}
