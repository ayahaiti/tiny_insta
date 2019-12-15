package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // 1h30
    // TODO show notifications https://www.npmjs.com/package/angular-notifier

    // 1h
    // TODO reload feed every 5seconds => load only 6 last images

    // 1h30
    // TODO design search component + result using bootstrap
    // TODO remove all posts and add pretty ones

    // 1h30
    // TODO add auto-scaling config gcp https://www.baeldung.com/spring-boot-google-app-engine

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);
    }

}
