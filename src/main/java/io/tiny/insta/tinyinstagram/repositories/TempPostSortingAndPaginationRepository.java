package io.tiny.insta.tinyinstagram.repositories;
import io.tiny.insta.tinyinstagram.entities.PostEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TempPostSortingAndPaginationRepository extends PagingAndSortingRepository<PostEntity, Long> {

    Page<PostEntity> findAll(Pageable pageable);

}
