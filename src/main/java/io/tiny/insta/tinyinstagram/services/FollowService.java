package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.exceptions.MoreThanOneFollowException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.services.io_followers.*;


public interface FollowService {

    void followUser(FollowUserServiceInput followUserServiceInput) throws UsernameOrTokenKoException, MoreThanOneFollowException;
    CheckIfFollowedServiceOutput checkIfFollowed(CheckIfFollowedServiceInput checkIfFollowedServiceInput) throws UsernameOrTokenKoException;
    GetNbOfFollowersServiceOutput getUserNbOfFollowers(GetNbOfFollowersServiceInput getNbOfFollowersServiceInput);
    UnfollowServiceOutput unfollow(UnfollowServiceInput unfollowServiceInput) throws MoreThanOneFollowException, UsernameOrTokenKoException;
}
