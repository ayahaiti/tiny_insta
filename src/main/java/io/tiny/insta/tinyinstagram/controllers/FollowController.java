package io.tiny.insta.tinyinstagram.controllers;

import io.tiny.insta.tinyinstagram.controllers.io_followers.*;
import io.tiny.insta.tinyinstagram.exceptions.MoreThanOneFollowException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.services.FollowService;
import io.tiny.insta.tinyinstagram.services.io_followers.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/follower")
public class FollowController {

    private FollowService followService;

    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/add"
    )
    public @ResponseBody FollowUserControllerOutput follow(@RequestBody FollowUserControllerInput followUserControllerInput) {
        FollowUserServiceInput followUserServiceInput = new FollowUserServiceInput(
                followUserControllerInput.getUsername(),
                followUserControllerInput.getToken(),
                followUserControllerInput.getUsernameToFollow()
        );
        try {
            followService.followUser(followUserServiceInput);
            return new FollowUserControllerOutput(null);
        } catch (UsernameOrTokenKoException e) {
            return new FollowUserControllerOutput("username_token_ko");
        } catch (MoreThanOneFollowException e) {
            return new FollowUserControllerOutput("more_than_one_follow");
        }
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/check"
    )
    public @ResponseBody CheckIfFollowedControllerOutput checkFollowed(@RequestBody CheckIfFollowedControllerInput checkIfFollowedControllerInput) {
        CheckIfFollowedServiceInput checkIfFollowedServiceInput = new CheckIfFollowedServiceInput(
                checkIfFollowedControllerInput.getFollower(),
                checkIfFollowedControllerInput.getFollowed(),
                checkIfFollowedControllerInput.getToken()
        );
        CheckIfFollowedServiceOutput checkIfFollowedServiceOutput = null;
        try {
            checkIfFollowedServiceOutput = followService.checkIfFollowed(checkIfFollowedServiceInput);
            CheckIfFollowedControllerOutput checkIfFollowedControllerOutput = new CheckIfFollowedControllerOutput(
                    checkIfFollowedServiceOutput.isFollowed(),
                    null);
            return checkIfFollowedControllerOutput;
        } catch (UsernameOrTokenKoException e) {
            return new CheckIfFollowedControllerOutput(
                    false,
                    "username_token_ko");
        }
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/count"
    )
    public @ResponseBody
    GetNbOfFollowersControllerOutput getFollowers(
            @RequestBody GetNbOfFollowersControllerInput getPostNbOfLikesControllerInput)
    {
        GetNbOfFollowersServiceInput getNbOfFollowersServiceInput = new GetNbOfFollowersServiceInput(
                getPostNbOfLikesControllerInput.getUsername()
        );
        GetNbOfFollowersServiceOutput getNbOfFollowersServiceOutput = followService.getUserNbOfFollowers(
                getNbOfFollowersServiceInput
        );
        GetNbOfFollowersControllerOutput getNbOfFollowersControllerOutput = new GetNbOfFollowersControllerOutput(
                getNbOfFollowersServiceOutput.getNbOfFollowers()
        );
        return getNbOfFollowersControllerOutput;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/delete"
    )
    public @ResponseBody
    UnfollowOutputController unfollow( @RequestBody UnfollowInputController unfollowInputController) {
        UnfollowOutputController unfollowOutputController = new UnfollowOutputController();
        UnfollowServiceInput unfollowServiceInput = new UnfollowServiceInput(
                unfollowInputController.getUsername(),
                unfollowInputController.getToken(),
                unfollowInputController.getUsernameToFollow()
        );
        UnfollowServiceOutput unfollowServiceOutput = null;
        try {
            unfollowServiceOutput = this.followService.unfollow(unfollowServiceInput);
            unfollowOutputController.setDeleted(unfollowServiceOutput.getDeleted());
            return unfollowOutputController;
        } catch (MoreThanOneFollowException e) {
            unfollowOutputController.setError("more_than_one_follow");
            return unfollowOutputController;
        } catch (UsernameOrTokenKoException e) {
            unfollowOutputController.setError("username_token_ko");
            return unfollowOutputController;
        }
    }

}
