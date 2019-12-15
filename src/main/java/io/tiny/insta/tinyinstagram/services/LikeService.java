package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.exceptions.MoreThanOneLikeException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.services.io_likes.*;

public interface LikeService {

    void unLikePost(UnlikePostServiceInput unlikePostServiceInput) throws UsernameOrTokenKoException;
    void likePost(LikePostServiceInput likePostServiceInput) throws MoreThanOneLikeException, UsernameOrTokenKoException;
    CheckLikedServiceOutput checkLiked(CheckLikedServiceInplut checkLikedServiceInplut) throws UsernameOrTokenKoException;
    GetPostNbOfLikesServiceOutput getPostNbOfLikes(GetPostNbOfLikesServiceInput getPostNbOfLikesServiceInput);

}
