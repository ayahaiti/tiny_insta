package io.tiny.insta.tinyinstagram.controllers;
import io.tiny.insta.tinyinstagram.controllers.io_post.AddPostControllerInput;
import io.tiny.insta.tinyinstagram.controllers.io_post.AddPostControllerOutput;
import io.tiny.insta.tinyinstagram.controllers.io_post.GetLastPostsControllerInput;
import io.tiny.insta.tinyinstagram.controllers.io_post.GetLastPostsControllerOutput;
import io.tiny.insta.tinyinstagram.services.PostService;
import io.tiny.insta.tinyinstagram.services.io_post.AddPostServiceInput;
import io.tiny.insta.tinyinstagram.services.io_post.AddPostServiceOutput;
import io.tiny.insta.tinyinstagram.services.io_post.GetLastPostsServiceInput;
import io.tiny.insta.tinyinstagram.services.io_post.GetLastPostsServiceOutput;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/post")
public class PostController {

    private PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/add"
    )
    public @ResponseBody AddPostControllerOutput addPost(@RequestBody AddPostControllerInput addPostControllerInput){

        AddPostServiceInput addPostServiceInput = new AddPostServiceInput(
                addPostControllerInput.getImage(),
                addPostControllerInput.getUsername(),
                addPostControllerInput.getToken(),
                addPostControllerInput.getQuote());
        AddPostServiceOutput addPostServiceOutput = postService.addPost(addPostServiceInput);
        AddPostControllerOutput addPostControllerOutput = new AddPostControllerOutput(addPostServiceOutput.isPostAdded());
        return addPostControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/get"
    )
    public @ResponseBody GetLastPostsControllerOutput getLastPosts(
            @RequestBody GetLastPostsControllerInput getLastPostsControllerInput
    ){
        GetLastPostsServiceInput getLastPostsServiceInput = new GetLastPostsServiceInput(
                getLastPostsControllerInput.getUsername(),
                getLastPostsControllerInput.getToken(),
                getLastPostsControllerInput.getPage()
                );
        GetLastPostsServiceOutput getLastPostsServiceOutput = postService.getSomePosts(getLastPostsServiceInput);
        GetLastPostsControllerOutput getLastPostsControllerOutput = new GetLastPostsControllerOutput(
                getLastPostsServiceOutput.getPostEntityList());
        return getLastPostsControllerOutput;
    }


}
