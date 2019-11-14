package io.tiny.insta.tinyinstagram.repositories;

import io.tiny.insta.tinyinstagram.entities.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {

    Optional<UserEntity> findByUsername(String username);
    Optional<UserEntity> findByUsernameAndPassword(String username, String password);
    Optional<UserEntity> findByUsernameAndToken(String username, String token);


}
