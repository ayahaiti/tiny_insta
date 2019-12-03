package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // TODO angular : form control in login/register + show error messages
    // TODO spring boot : fix all webservices

    // TODO angular : in dashboard = show search component + show feed component

    // TODO add auto-scaling config gcp https://www.baeldung.com/spring-boot-google-app-engine

    // TODO add exceptions : usernameAlreadyExists for user-create
    // TODO add exceptions : usernameAndPasswordKO for user-connect + username&password ko
    // TODO add exceptions : usernameAndTokenKO for the rest of ws

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);
    }

}
