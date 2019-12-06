package io.tiny.insta.tinyinstagram.controllers;

import io.tiny.insta.tinyinstagram.controllers.io_followers.*;
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
    public void follow(@RequestBody FollowUserControllerInput followUserControllerInput) throws Exception {
        FollowUserServiceInput followUserServiceInput = new FollowUserServiceInput(
                followUserControllerInput.getUsername(),
                followUserControllerInput.getToken(),
                followUserControllerInput.getUsernameToFollow()
        );
        followService.followUser(followUserServiceInput);
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/check"
    )
    public CheckIfFollowedControllerOutput checkFollowed(@RequestBody CheckIfFollowedControllerInput checkIfFollowedControllerInput) throws Exception {
        CheckIfFollowedServiceInput checkIfFollowedServiceInput = new CheckIfFollowedServiceInput(
                checkIfFollowedControllerInput.getFollower(),
                checkIfFollowedControllerInput.getFollowed(),
                checkIfFollowedControllerInput.getToken()
        );
        CheckIfFollowedServiceOutput checkIfFollowedServiceOutput = followService.checkIfFollowed(checkIfFollowedServiceInput);
        CheckIfFollowedControllerOutput checkIfFollowedControllerOutput = new CheckIfFollowedControllerOutput(
                checkIfFollowedServiceOutput.isFollowed()
        );
        return checkIfFollowedControllerOutput;
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
    UnfollowOutputController unfollow( @RequestBody UnfollowInputController unfollowInputController) throws Exception {
        UnfollowOutputController unfollowOutputController = new UnfollowOutputController();
        UnfollowServiceInput unfollowServiceInput = new UnfollowServiceInput(
                unfollowInputController.getUsername(),
                unfollowInputController.getToken(),
                unfollowInputController.getUsernameToFollow()
        );
        UnfollowServiceOutput unfollowServiceOutput = this.followService.unfollow(unfollowServiceInput);
        unfollowOutputController.setDeleted(unfollowServiceOutput.getDeleted());
        return unfollowOutputController;
    }

}
