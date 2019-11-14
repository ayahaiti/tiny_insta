package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.entities.PostEntity;
import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.repositories.PostRepository;
import io.tiny.insta.tinyinstagram.repositories.TempPostSortingAndPaginationRepository;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.io_post.AddPostServiceInput;
import io.tiny.insta.tinyinstagram.services.io_post.AddPostServiceOutput;
import io.tiny.insta.tinyinstagram.services.io_post.GetLastPostsServiceInput;
import io.tiny.insta.tinyinstagram.services.io_post.GetLastPostsServiceOutput;
import io.tiny.insta.tinyinstagram.services.utils.PostPojo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final TempPostSortingAndPaginationRepository tempPostSortingAndPaginationRepository;

    public PostServiceImpl(UserRepository userRepository,
                           PostRepository postRepository,
                           TempPostSortingAndPaginationRepository tempPostSortingAndPaginationRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.tempPostSortingAndPaginationRepository = tempPostSortingAndPaginationRepository;
    }

    @Override
    public AddPostServiceOutput addPost(AddPostServiceInput addPostServiceInput) {
        AddPostServiceOutput addPostServiceOutput = new AddPostServiceOutput();
        Optional<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                addPostServiceInput.getUsername(),
                addPostServiceInput.getToken()
        ) ;
        if(userEntity.isPresent()) {
            PostEntity postEntity = new PostEntity(addPostServiceInput.getImage(),
                    addPostServiceInput.getQuote(),
                    userEntity.get());
            postRepository.save(postEntity);
            addPostServiceOutput.setPostAdded(true);
        }
        else{
            addPostServiceOutput.setPostAdded(false);
        }
        return addPostServiceOutput;
    }


    @Override
    public GetLastPostsServiceOutput getSomePosts(GetLastPostsServiceInput input) {
        GetLastPostsServiceOutput output = null;
        Optional<UserEntity> userEntityOptional =
                userRepository.findByUsernameAndToken(
                        input.getUsername(),
                        input.getToken()
                );
        if(userEntityOptional.isPresent()){
            Page<PostEntity> outputFromDatabase = tempPostSortingAndPaginationRepository.findAll(
                    PageRequest.of(
                            input.getPage(),
                            10,
                            Sort.by(
                                    Sort.Direction.DESC,
                                    "id"
                            )
                    )
            );
            output = new GetLastPostsServiceOutput(
                    outputFromDatabase.get()
                            .map(postEntity -> {
                                return new PostPojo(postEntity.getId()+"",
                                        postEntity.getUserEntity().getUsername(),
                                        postEntity.getQuote(),
                                        postEntity.getImage()
                                );
                            })
                            .collect(Collectors.toList())
            );
        }
        return output;
    }
}
