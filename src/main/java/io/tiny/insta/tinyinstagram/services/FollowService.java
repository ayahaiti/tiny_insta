package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.services.io_followers.*;


public interface FollowService {

    void followUser(FollowUserServiceInput followUserServiceInput) throws Exception;
    CheckIfFollowedServiceOutput checkIfFollowed(CheckIfFollowedServiceInput checkIfFollowedServiceInput) throws Exception;
    GetNbOfFollowersServiceOutput getUserNbOfFollowers(GetNbOfFollowersServiceInput getNbOfFollowersServiceInput);
    UnfollowServiceOutput unfollow(UnfollowServiceInput unfollowServiceInput) throws Exception;
}
