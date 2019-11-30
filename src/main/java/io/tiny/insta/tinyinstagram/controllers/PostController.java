package io.tiny.insta.tinyinstagram.controllers;
import io.tiny.insta.tinyinstagram.controllers.io_post.*;
import io.tiny.insta.tinyinstagram.services.PostService;
import io.tiny.insta.tinyinstagram.services.io_post.*;
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
        AddPostControllerOutput addPostControllerOutput = new AddPostControllerOutput(
                addPostServiceOutput.isPostAdded(),
                addPostServiceOutput.getUniqueIdentifier()
        );
        return addPostControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/check"
    )
    public @ResponseBody CheckPostControllerOutput checkPost(
            @RequestBody CheckPostControllerInput checkPostControllerInput
    ) throws Exception {
        PostCheckServiceInput postCheckServiceInput = new PostCheckServiceInput(
                checkPostControllerInput.getUsername(),
                checkPostControllerInput.getToken(),
                checkPostControllerInput.getUniqueIdentifier()
                );
        PostCheckServiceOutput postCheckServiceOutput = postService.checkPost(postCheckServiceInput);
        CheckPostControllerOutput checkPostControllerOutput = new CheckPostControllerOutput(
                postCheckServiceOutput.getExists()
        );
        return checkPostControllerOutput;
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
