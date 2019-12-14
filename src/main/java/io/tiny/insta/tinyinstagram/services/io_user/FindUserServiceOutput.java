package io.tiny.insta.tinyinstagram.services.io_user;

import io.tiny.insta.tinyinstagram.entities.UserEntity;

public class FindUserServiceOutput {

    private UserEntity userEntity;

    public FindUserServiceOutput() {
    }

    public FindUserServiceOutput(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

}
