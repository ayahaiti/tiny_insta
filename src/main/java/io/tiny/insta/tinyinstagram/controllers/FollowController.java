package io.tiny.insta.tinyinstagram.controllers;

import io.tiny.insta.tinyinstagram.controllers.io_followers.FollowUserControllerInput;
import io.tiny.insta.tinyinstagram.controllers.io_followers.FollowUserControllerOutput;
import io.tiny.insta.tinyinstagram.controllers.io_followers.GetNbOfFollowersControllerInput;
import io.tiny.insta.tinyinstagram.controllers.io_followers.GetNbOfFollowersControllerOutput;
import io.tiny.insta.tinyinstagram.services.FollowService;
import io.tiny.insta.tinyinstagram.services.io_followers.FollowUserServiceInput;
import io.tiny.insta.tinyinstagram.services.io_followers.GetNbOfFollowersServiceInput;
import io.tiny.insta.tinyinstagram.services.io_followers.GetNbOfFollowersServiceOutput;
import io.tiny.insta.tinyinstagram.services.io_likes.GetPostNbOfLikesServiceOutput;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/follow")
public class FollowController {

    private FollowService followService;

    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    @RequestMapping(method = RequestMethod.POST,
            consumes = "application/json",
            produces = "application/json",
            path = "/addfollow"
    )
    public void likePost(@RequestBody FollowUserControllerInput followUserControllerInput) throws Exception {
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
            path = "/followers"
    )
    public @ResponseBody
    GetNbOfFollowersControllerOutput getLikes(
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

}
