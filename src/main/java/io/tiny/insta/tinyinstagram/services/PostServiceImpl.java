package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.entities.PostEntity;
import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.repositories.PostRepository;
import io.tiny.insta.tinyinstagram.repositories.PostSortingAndPaginationRepository;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.io_post.*;
import io.tiny.insta.tinyinstagram.services.utils.PostPojo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final PostSortingAndPaginationRepository tempPostSortingAndPaginationRepository;

    public PostServiceImpl(UserRepository userRepository,
                           PostRepository postRepository,
                           PostSortingAndPaginationRepository tempPostSortingAndPaginationRepository) {
        this.userRepository = userRepository;
        this.postRepository = postRepository;
        this.tempPostSortingAndPaginationRepository = tempPostSortingAndPaginationRepository;
    }

    @Override
    public AddPostServiceOutput addPost(AddPostServiceInput addPostServiceInput) {
        AddPostServiceOutput addPostServiceOutput = new AddPostServiceOutput();
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                addPostServiceInput.getUsername(),
                addPostServiceInput.getToken()
        );
        if(userEntity!=null && userEntity.size()==1) {
            PostEntity postEntity = new PostEntity(addPostServiceInput.getImage(),
                    addPostServiceInput.getQuote(),
                    userEntity.get(0).getUsername(),
                    System.currentTimeMillis()+"",
                    UUID.randomUUID().toString()
                    );
            postRepository.save(postEntity);
            addPostServiceOutput.setPostAdded(true);
            addPostServiceOutput.setUniqueIdentifier(postEntity.getUniqueIdentifier());
        }
        else{
            addPostServiceOutput.setPostAdded(false);
        }
        return addPostServiceOutput;
    }

    @Override
    public PostCheckServiceOutput checkPost(PostCheckServiceInput postCheckInput) throws Exception {
        PostCheckServiceOutput checkPostServiceOutput = new PostCheckServiceOutput(Boolean.FALSE);
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                postCheckInput.getUsername(),
                postCheckInput.getToken()
        );
        if(userEntity!=null && userEntity.size()==1) {
            List<PostEntity> postEntities = postRepository.findByUniqueIdentifier(postCheckInput.getUniqueIdentifier());
            if(postEntities!=null && postEntities.size() == 1){
                checkPostServiceOutput.setExists(Boolean.TRUE);
            }
        }
        else{
            throw new Exception();
        }
        return checkPostServiceOutput;
    }

    @Override
    public GetLastPostsServiceOutput getSomePosts(GetLastPostsServiceInput input) {
        GetLastPostsServiceOutput output = null;
        List<UserEntity> userEntityOptional =
                userRepository.findByUsernameAndToken(
                        input.getUsername(),
                        input.getToken()
                );
        if(userEntityOptional!=null && userEntityOptional.size()==1){
            Page<PostEntity> outputFromDatabase = tempPostSortingAndPaginationRepository.findAll(
                    PageRequest.of(
                            input.getPage(),
                            10,
                            Sort.by(
                                    Sort.Direction.DESC,
                                    "timestamp"
                            )
                    )
            );
            output = new GetLastPostsServiceOutput(
                    outputFromDatabase.get()
                            .map(postEntity -> {
                                return new PostPojo(postEntity.getId()+"",
                                        postEntity.getUsername(),
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
