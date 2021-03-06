package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.entities.LikesEntity;
import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.exceptions.MoreThanOneLikeException;
import io.tiny.insta.tinyinstagram.exceptions.UsernameOrTokenKoException;
import io.tiny.insta.tinyinstagram.repositories.LikesRespository;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.io_likes.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeserviceImpl implements LikeService {

    private final LikesRespository likesRespository;
    private final UserRepository userRepository;

    public LikeserviceImpl(LikesRespository likesRespository, UserRepository userRepository) {
        this.likesRespository = likesRespository;
        this.userRepository = userRepository;
    }

    @Override
    public void likePost(LikePostServiceInput likePostServiceInput) throws MoreThanOneLikeException, UsernameOrTokenKoException {
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(likePostServiceInput.getUsername(),
                likePostServiceInput.getToken());
       if( userEntity != null && userEntity.size() == 1) {
           List<LikesEntity> likesEntities = likesRespository.findByUsernameAndUniqueIdentifier(
                   likePostServiceInput.getUsername(),
                   likePostServiceInput.getUniqueIdentifier()
           );
           if (likesEntities != null && likesEntities.size() > 0){
               throw new MoreThanOneLikeException();
           }
           else{
               LikesEntity likesEntity = new LikesEntity(likePostServiceInput.getUsername(), likePostServiceInput.getUniqueIdentifier());
               likesRespository.save(likesEntity);
           }
        }
        else {
            throw new UsernameOrTokenKoException();
        }
    }

    @Override
    public void unLikePost(UnlikePostServiceInput unlikePostServiceInput) throws UsernameOrTokenKoException{
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                unlikePostServiceInput.getUsername(),
                unlikePostServiceInput.getToken());
        if( userEntity != null && userEntity.size() == 1) {
            List<LikesEntity> likesEntities = likesRespository.findByUsernameAndUniqueIdentifier(
                    unlikePostServiceInput.getUsername(),
                    unlikePostServiceInput.getUniqueIdentifier()
            );
            likesRespository.deleteByUsernameAndUniqueIdentifier(
                    unlikePostServiceInput.getUsername(),
                    unlikePostServiceInput.getUniqueIdentifier()
            );
        }
        else {
            throw new UsernameOrTokenKoException();
        }
    }

    @Override
    public CheckLikedServiceOutput checkLiked(CheckLikedServiceInplut checkLikedServiceInplut) throws UsernameOrTokenKoException {
        CheckLikedServiceOutput checkLikedServiceOutput = new CheckLikedServiceOutput(false);
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(checkLikedServiceInplut.getUsername(),
                checkLikedServiceInplut.getToken());
        if ( userEntity.size() == 1 && userEntity != null) {
            List<LikesEntity> likesEntities = likesRespository.findByUsernameAndUniqueIdentifier(
                    checkLikedServiceInplut.getUsername(),
                    checkLikedServiceInplut.getUniqueIdentifier());
            if (likesEntities != null && likesEntities.size() == 1){
                checkLikedServiceOutput.setLiked(true);
            }
            else {
                checkLikedServiceOutput.setLiked(false);
            }
        }
        else{
            throw new UsernameOrTokenKoException();
        }
        return checkLikedServiceOutput;
    }

    @Override
    public GetPostNbOfLikesServiceOutput getPostNbOfLikes(GetPostNbOfLikesServiceInput getPostNbOfLikesServiceInput) {
        GetPostNbOfLikesServiceOutput getPostNbOfLikesServiceOutput = new GetPostNbOfLikesServiceOutput();
        int postNbOfLikes = likesRespository.countAllByUniqueIdentifier(getPostNbOfLikesServiceInput.getUniqueIdentifier());
        getPostNbOfLikesServiceOutput.setNbOfPostLikes(postNbOfLikes);
        return getPostNbOfLikesServiceOutput;
    }
}
