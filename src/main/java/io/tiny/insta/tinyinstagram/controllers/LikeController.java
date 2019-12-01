package io.tiny.insta.tinyinstagram.controllers;


import io.tiny.insta.tinyinstagram.controllers.io_likes.*;
import io.tiny.insta.tinyinstagram.services.LikeService;
import io.tiny.insta.tinyinstagram.services.io_likes.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/like")
public class LikeController {

    private LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/add"
    )
    public void likePost(@RequestBody LikePostControllerInput likePostControllerInput) throws Exception {
        LikePostServiceInput likePostServiceInput = new LikePostServiceInput(
                likePostControllerInput.getUsername(),
                likePostControllerInput.getUniqueIdentifier()
        );
        likeService.likePost(likePostServiceInput);
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/check"
    )
    public @ResponseBody CheckLikedControllerOutput checkLiked(
            @RequestBody CheckLikedControllerInput checkLikedControllerInput)
    {
        CheckLikedServiceInplut checkLikedServiceInplut = new CheckLikedServiceInplut(
                checkLikedControllerInput.getUsername(),
                checkLikedControllerInput.getToken(),
                checkLikedControllerInput.getUniqueIdentifier()
        );
        CheckLikedServiceOutput checkLikedServiceOutput = likeService.checkLiked(checkLikedServiceInplut);
        CheckLikedControllerOutput checkLikedControllerOutput = new CheckLikedControllerOutput(
                checkLikedServiceOutput.isLiked()
        );
        return checkLikedControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/count"
    )
    public @ResponseBody
    GetPostNbOfLikesControllerOutput getLikes(
            @RequestBody GetPostNbOfLikesControllerInput getPostNbOfLikesControllerInput)
    {
        GetPostNbOfLikesServiceInput getPostNbOfLikesServiceInput = new GetPostNbOfLikesServiceInput(
                getPostNbOfLikesControllerInput.getUniqueIdentifier()
        );
        GetPostNbOfLikesServiceOutput getPostNbOfLikesServiceOutput = likeService.getPostNbOfLikes(
                getPostNbOfLikesServiceInput);
        GetPostNbOfLikesControllerOutput getPostNbOfLikesControllerOutput = new GetPostNbOfLikesControllerOutput(
                getPostNbOfLikesServiceOutput.getNbOfPostLikes()
        );
        return getPostNbOfLikesControllerOutput;
    }



}
