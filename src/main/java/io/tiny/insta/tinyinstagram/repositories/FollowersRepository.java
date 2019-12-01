package io.tiny.insta.tinyinstagram.repositories;


import io.tiny.insta.tinyinstagram.entities.FollowersEntity;
import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FollowersRepository extends DatastoreRepository<FollowersEntity, Long> {

    List<FollowersEntity> findByFollowedUsernameAndFollowerUsername(String followed, String follower);

    int countByFollowedUsername(String username);
}
