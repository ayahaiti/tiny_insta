package io.tiny.insta.tinyinstagram.services;

import io.tiny.insta.tinyinstagram.entities.FollowersEntity;
import io.tiny.insta.tinyinstagram.entities.UserEntity;
import io.tiny.insta.tinyinstagram.repositories.FollowersRepository;
import io.tiny.insta.tinyinstagram.repositories.UserRepository;
import io.tiny.insta.tinyinstagram.services.io_followers.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FollowServiceImpl implements FollowService {

    private final FollowersRepository follRepository;
    private final UserRepository userRepository;

    public FollowServiceImpl(UserRepository userRepository, FollowersRepository follRepository){
        this.userRepository = userRepository;
        this.follRepository = follRepository;
    }

    @Override
    public void followUser(FollowUserServiceInput followUserServiceInput) throws Exception{
        FollowUserServiceOutput followUserServiceOutput = new FollowUserServiceOutput();
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                followUserServiceInput.getUsername(),
                followUserServiceInput.getToken());
        if ( userEntity.size() == 1 && userEntity != null) {
            List<FollowersEntity> followersEntities = follRepository.findByFollowedAndFollower(
                    followUserServiceInput.getUsernameToFollow(),
                    followUserServiceInput.getUsername()
            );

            if (followersEntities != null && followersEntities.size() > 0) {
                throw new Exception();
            } else {
                FollowersEntity followersEntity = new FollowersEntity(
                        followUserServiceInput.getUsernameToFollow(),
                        followUserServiceInput.getUsername()
                );
                follRepository.save(followersEntity);
            }
        }
        else {
            throw new Exception();
        }
    }

    @Override
    public CheckIfFollowedServiceOutput checkIfFollowed(CheckIfFollowedServiceInput checkIfFollowedServiceInput) throws Exception {
        CheckIfFollowedServiceOutput checkIfFollowedServiceOutput = new CheckIfFollowedServiceOutput();
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                checkIfFollowedServiceInput.getFollower(),
                checkIfFollowedServiceInput.getToken());
        if ( userEntity.size() == 1 && userEntity != null) {
            List<FollowersEntity> followersEntities = follRepository.findByFollowedAndFollower(
                    checkIfFollowedServiceInput.getFollowed(),
                    checkIfFollowedServiceInput.getFollower()
            );
            if (followersEntities != null && followersEntities.size() > 0) {
                checkIfFollowedServiceOutput.setFollowed(true);
            } else {
                checkIfFollowedServiceOutput.setFollowed(false);
            }
        }
        else {
            throw new Exception();
        }
        return checkIfFollowedServiceOutput;
    }

    @Override
    public GetNbOfFollowersServiceOutput getUserNbOfFollowers(GetNbOfFollowersServiceInput getNbOfFollowersServiceInput) {
        GetNbOfFollowersServiceOutput getNbOfFollowersServiceOutput = new GetNbOfFollowersServiceOutput();
        int nbOfFollowers = follRepository.countByFollowed(getNbOfFollowersServiceInput.getUsername());
        getNbOfFollowersServiceOutput.setNbOfFollowers(nbOfFollowers);
        return getNbOfFollowersServiceOutput;
    }

    @Override
    public UnfollowServiceOutput unfollow(UnfollowServiceInput unfollowServiceInput) throws Exception{
        UnfollowServiceOutput unfollowServiceOutput = new UnfollowServiceOutput();
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                unfollowServiceInput.getUsername(),
                unfollowServiceInput.getToken());
        if ( userEntity.size() == 1 && userEntity != null) {
            List<FollowersEntity> followersEntities = follRepository.findByFollowedAndFollower(
                    unfollowServiceInput.getUsernameToFollow(),
                    unfollowServiceInput.getUsername()
            );

            if (followersEntities != null && followersEntities.size() > 0) {
                Long deleted = this.follRepository.deleteByFollowedAndFollower(
                        unfollowServiceInput.getUsernameToFollow(),
                        unfollowServiceInput.getUsername()
                );
                unfollowServiceOutput.setDeleted(deleted);

            } else {
                throw new Exception();
            }
        }
        else {
            throw new Exception();
        }
        return unfollowServiceOutput;
    }
}
