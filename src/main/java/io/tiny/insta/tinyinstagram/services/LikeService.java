package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.services.io_likes.*;

public interface LikeService {

    void unLikePost(UnlikePostServiceInput unlikePostServiceInput) throws Exception;
    void likePost(LikePostServiceInput likePostServiceInput) throws Exception;
    CheckLikedServiceOutput checkLiked(CheckLikedServiceInplut checkLikedServiceInplut);
    GetPostNbOfLikesServiceOutput getPostNbOfLikes(GetPostNbOfLikesServiceInput getPostNbOfLikesServiceInput);

}
