package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // TODO load image => show image ( code in bitbucket shareArticle platform )
    // TODO show feed like slides => better form to insert image material design in bitbucket shareArticle

    // TODO lock all button after click + show error messages

    // TODO add auto-scaling config gcp https://www.baeldung.com/spring-boot-google-app-engine

    // TODO add exceptions : usernameAlreadyExists for user-create
    // TODO add exceptions : usernameAndPasswordKO for user-connect + username&password ko
    // TODO add exceptions : usernameAndTokenKO for the rest of ws

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);
    }

}
