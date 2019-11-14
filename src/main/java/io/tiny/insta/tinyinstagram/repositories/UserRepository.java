package io.tiny.insta.tinyinstagram.repositories;

import io.tiny.insta.tinyinstagram.entities.UserEntity;
import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends DatastoreRepository<UserEntity, Long> {

    Optional<UserEntity> findByUsername(String username);
    Optional<UserEntity> findByUsernameAndPassword(String username, String password);
    Optional<UserEntity> findByUsernameAndToken(String username, String token);


}
