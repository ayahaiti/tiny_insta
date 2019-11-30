package io.tiny.insta.tinyinstagram.repositories;

import io.tiny.insta.tinyinstagram.entities.PostEntity;
import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PostRepository extends DatastoreRepository<PostEntity, Long> {

    List<PostEntity> findByUniqueIdentifier(String uniqueIdentifier);

}
