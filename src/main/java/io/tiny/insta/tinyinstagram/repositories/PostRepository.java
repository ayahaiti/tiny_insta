package io.tiny.insta.tinyinstagram.repositories;

import io.tiny.insta.tinyinstagram.entities.PostEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepository extends CrudRepository<PostEntity, Long> {



}
