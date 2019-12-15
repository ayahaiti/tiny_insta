package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.services.io_post.*;

public interface PostService {

    AddPostServiceOutput addPost(AddPostServiceInput addPostServiceInput);

    PostCheckServiceOutput checkPost(PostCheckServiceInput postCheckInput) throws Exception;

    GetLastPostsServiceOutput getSomePosts(GetLastPostsServiceInput input) throws UsernameOrTokenKoException;

}
