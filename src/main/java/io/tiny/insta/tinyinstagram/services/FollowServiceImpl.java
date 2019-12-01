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

    final FollowersRepository follRepository;
    final UserRepository userRepository;

    public FollowServiceImpl(FollowersRepository follRepository, UserRepository userRepository) {
        this.follRepository = follRepository;
        this.userRepository = userRepository;
    }


    @Override
    public void followUser(FollowUserServiceInput followUserServiceInput) throws Exception{
        FollowUserServiceOutput followUserServiceOutput = new FollowUserServiceOutput();
        List<UserEntity> userEntity = userRepository.findByUsernameAndToken(
                followUserServiceInput.getUsername(),
                followUserServiceInput.getToken());
        if ( userEntity.size() == 1 && userEntity != null) {
            FollowersEntity followersEntity = new FollowersEntity(
                    followUserServiceInput.getUsernameToFollow(),
                    followUserServiceInput.getUsername());
            follRepository.save(followersEntity);
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
            List<FollowersEntity> followersEntities = follRepository.findByFollowedUsernameAndFollowerUsername(
                    checkIfFollowedServiceInput.getFollowed(),
                    checkIfFollowedServiceInput.getFollower()
            );
            if (followersEntities != null && followersEntities.size() == 1) {
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
        int nbOfFollowers = follRepository.countByFollowedUsername(getNbOfFollowersServiceInput.getUsername());
        getNbOfFollowersServiceOutput.setNbOfFollowers(nbOfFollowers);
        return getNbOfFollowersServiceOutput;
    }
}
