package io.tiny.insta.tinyinstagram.controllers;


import io.tiny.insta.tinyinstagram.controllers.io_likes.*;
import io.tiny.insta.tinyinstagram.exceptions.MoreThanOneLikeException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
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
    public @ResponseBody LikePostControllerOutput likePost(@RequestBody LikePostControllerInput likePostControllerInput) {
        LikePostServiceInput likePostServiceInput = new LikePostServiceInput(
                likePostControllerInput.getUsername(),
                likePostControllerInput.getToken(),
                likePostControllerInput.getUniqueIdentifier()
        );
        try {
            likeService.likePost(likePostServiceInput);
            return new LikePostControllerOutput(null);
        } catch (MoreThanOneLikeException e) {
            return new LikePostControllerOutput("more_than_one_like");
        } catch (UsernameOrTokenKoException e) {
            return new LikePostControllerOutput("username_token_ko");
        }
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/delete"
    )
    public @ResponseBody DislikePostControllerOutput dislikePost(@RequestBody DislikePostControllerInput dislikePostControllerInput) {
        UnlikePostServiceInput unlikePostServiceInput = new UnlikePostServiceInput(
                dislikePostControllerInput.getUsername(),
                dislikePostControllerInput.getToken(),
                dislikePostControllerInput.getUniqueIdentifier()
        );
        try {
            likeService.unLikePost(unlikePostServiceInput);
            return new DislikePostControllerOutput(null);
        } catch (UsernameOrTokenKoException e) {
            return new DislikePostControllerOutput("username_token_ko");
        }
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
        CheckLikedServiceOutput checkLikedServiceOutput = null;
        try {
            checkLikedServiceOutput = likeService.checkLiked(checkLikedServiceInplut);
            CheckLikedControllerOutput checkLikedControllerOutput = new CheckLikedControllerOutput(
                    checkLikedServiceOutput.isLiked(),
                    null
            );
            return checkLikedControllerOutput;
        } catch (UsernameOrTokenKoException e) {
            return new CheckLikedControllerOutput(
                    false,
                    "username_token_ko"
            );
        }

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
