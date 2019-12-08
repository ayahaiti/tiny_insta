package io.tiny.insta.tinyinstagram.repositories;


import io.tiny.insta.tinyinstagram.entities.LikesEntity;
import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikesRespository extends DatastoreRepository<LikesEntity, Long> {

    List<LikesEntity> findByUsernameAndUniqueIdentifier(String username, String uniqueidentifier);
    int countAllByUniqueIdentifier(String uniqueIdentifier);
    Long deleteByUsernameAndUniqueIdentifier(String username, String uniqueIdentifier);

}
