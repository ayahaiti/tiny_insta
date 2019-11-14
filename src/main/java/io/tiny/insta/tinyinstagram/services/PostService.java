package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.services.io_post.AddPostServiceInput;
import io.tiny.insta.tinyinstagram.services.io_post.AddPostServiceOutput;
import io.tiny.insta.tinyinstagram.services.io_post.GetLastPostsServiceInput;
import io.tiny.insta.tinyinstagram.services.io_post.GetLastPostsServiceOutput;

public interface PostService {

    AddPostServiceOutput addPost(AddPostServiceInput addPostServiceInput);

    GetLastPostsServiceOutput getSomePosts(GetLastPostsServiceInput input);

}
