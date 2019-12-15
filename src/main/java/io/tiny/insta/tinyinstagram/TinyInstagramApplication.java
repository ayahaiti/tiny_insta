package io.tiny.insta.tinyinstagram;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinyInstagramApplication {

    // 15min
    // TODO remove all posts and add pretty ones

    // 45min
    // TODO add auto-scaling config gcp https://www.baeldung.com/spring-boot-google-app-engine

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);
    }

}
